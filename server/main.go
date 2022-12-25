package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()

	e.Use(middleware.Recover())
	e.Use(middleware.Gzip())

	e.Static("/", "dist")

	e.HTTPErrorHandler = func(err error, c echo.Context) {
		c.Logger().Error(err)
		err = c.File("dist/404.html")

		if err != nil {
			c.Logger().Error(err)
		}
	}

	err := e.Start(":3000")

	if err != nil {
		panic(err)
	}
}
