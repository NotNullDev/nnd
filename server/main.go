package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()

	e.Use(middleware.Recover())
	e.Use(middleware.Gzip())

	e.Use(middleware.StaticWithConfig(middleware.StaticConfig{
		HTML5:  true,
		Index:  "index.html",
		Browse: false,
		Root:   "dist",
	}))

	e.Start(":3000")
}
