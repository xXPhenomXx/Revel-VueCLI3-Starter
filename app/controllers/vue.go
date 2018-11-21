package controllers

import (
	"github.com/revel/revel"
)

type Vue struct {
	*revel.Controller
}

func (c Vue) Index() revel.Result {
	return c.RenderTemplate("Vue/index.html")
}
