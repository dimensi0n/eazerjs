# EazerJS

The next generation templating engine


## Getting Started

```
# To install eazerjs
npm i -S eazerjs
```

The eazer.js file contains the main Component class that represents a template, where you can
define content using javascript objects like so:

```js
const {Component} = require('eazerjs')
const Title = {
    type: 'h1'
  }

  const Paragraph = {
    type: 'p'
  }

  const aliases = {
    MyComponentTitle: Title,
    MyComponentParagraph: Paragraph
  }   

  const content = {
    MyComponentTitle: 'Super component',
    MyComponentParagraph: 'Super paragraph'
  }
  
  const component = new Component('MySuperComponent', content, aliases)
```

The component object called "MySuperComponent" now has the an `h1` title inside and would return:

> `<div class=\'MySuperComponent\' ><h1   style="">Super component</h1><p style="">Super paragraph</p></div>`

when component.render() is called.

The eazer file also includes `Group` class which groups `Component` instances to create complex Component structures,
as well as a `Page` which is a container for `Group` of `Component`

## Tests

To run tests use:

```sh
npm test
```
