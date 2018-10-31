const { Component, Group, Page } = require('../eazer')

const express = require('express')

const app = express()

const Types = {

  Paragraph: {
    type: 'p'
  }

}

const MyFirstComponent = {

  Alisases: {

    p: Types.Paragraph

  },

  Content: {

    p: 'Component 1'

  }
}

const MySecondComponent = {

  Alisases: {

    p: Types.Paragraph

  },

  Content: {

    p: 'Component 2'

  }
}

app.get('/', (req, res) => {
  const component1 = new Component('component1', MyFirstComponent.Content, MyFirstComponent.Alisases)
  const component2 = new Component('component2', MySecondComponent.Content, MySecondComponent.Alisases)
  const container = new Group('container', 'container')
  container.include([component1, component2])

  const page = new Page('MySuperPage', 'A super page made with Eazer', 'utf-8')
  page.require([container])

  res.end(page.render())
})

app.listen(8001)
