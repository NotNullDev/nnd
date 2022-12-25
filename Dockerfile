FROM node:18.12.1-alpine as node_modules

WORKDIR /app

COPY package* .
COPY yarn.lock .

RUN yarn


FROM node:18.12.1-alpine as build-front

WORKDIR /app
COPY --from=node_modules /app/node_modules ./node_modules

COPY . .
RUN yarn build


# build go image
FROM golang:1.18 as builder

# Create and change to the app directory.
WORKDIR /app

# Retrieve application dependencies.
# This allows the container build to reuse cached dependencies.
# Expecting to copy go.mod and if present go.sum.
COPY server/go.* ./
RUN go mod download

# Copy local code to the container image.
COPY ./server .

# Build the binary.
RUN go build -v -o server main.go


# Use the official Debian slim image for a lean production container.
# https://hub.docker.com/_/debian
# https://docs.docker.com/develop/develop-images/multistage-build/#use-multi-stage-builds

FROM debian:buster-slim as server-runner
RUN set -x && apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y \
    ca-certificates && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy the binary to the production image from the builder stage.
COPY --from=builder /app/server /app/server
COPY --from=build-front /app/dist /app/dist

EXPOSE 3000

CMD ["/app/server"]