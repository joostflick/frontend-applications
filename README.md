# Prototype risk indicator

> risk indicator

![screencap](./screencap.png "Screen capture")

## Build Setup

The core program was build using the vue cli, with the vue create command

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Dependencies

I used the following dependencies in my application

### Babel

Make sure my newer code runs in all browsers by refactoring it

### Uglify

Compress the code so it takes up less space and runs faster

### Browserify

So I can use requires and imports real time without having to build every time

### Vueify

In addition to browserify, for vue.js components

For more information see the [docs for vueify](https://github.com/vuejs/vueify).

### Watchify

Hot reload so I can see my changes everytime I save

## The idea

An application to determine the risk for a child to later be placed outside of parental custody. This could help people make a less subjective choice.

## Core functionality

#### Risk indication

Fill in the questions to get a risk indication, this live reloads every time a question is filled in. The weight of each choice is not correc yet but the functionality is there.

#### Second Opinion

Still in a conceptual phase. Upload your risk assesment for other people to view and rate, so you aren't alone in your decisions. This risk assesment would be completely anonymous as not to reveal the childs identity.


