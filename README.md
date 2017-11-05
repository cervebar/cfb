CFHero dashboard
---
A starter project with [React](https://facebook.github.io/react/), [Babel](http://babeljs.io/), and [Webpack](http://webpack.github.io/).


## Setup
---
```
npm install
```

## Usage
---
1. `node server.js`
2. Open [http://localhost:3000/](http://localhost:3000/).


More Details
---

* No CSS. For experiments or tests, put your styles in `index.html` in a `<style>` tag. For real projects, pick from [these style tools](http://andrewhfarmer.com/how-to-style-react/).
* No Flux. If you need it - try [Redux](https://github.com/reactjs/redux) or [MobX](https://github.com/mobxjs/mobx)!
* Webpack is run with the `express` and `webpack-dev-middleware`.
* The 'content base' is set to `www`. Any files in that directory will be served by express.



HMR
---

HMR is not supported in the master branch for simplicity. If you would like HMR support, you can [see the changes that add HMR support](https://github.com/ahfarmer/minimal-react-starter/compare/hmr) or you can directly clone the HMR branch:

```
git clone -b hmr git@github.com:ahfarmer/minimal-react-starter.git
```
