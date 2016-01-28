# Example Webpack project

This is an example of using Webpack together with React and [Karma][karma].

It shows how we can ES modules and CSS modules together (check `src/index.js`).

[`extract-text-webpack-plugin`][extract-text-plugin] is used to build a
stylesheet file instead of using `<style>` tags.

`npm run` lists the tasks you can run.

`npm start` starts `webpack-dev-server`.

`npm test` runs tests. Any file named `.spec.js` will be run by [Karma][karma].
The tests are set up to use [Mocha][mocha],
[`react-addons-test-utils`][react-test-utils], [Expect][expect] and
[ExpectJSX][expect-jsx].

### TODO

- [ ] Add [`enzyme`][enzyme] for integration testing components (e.g. testing
  click events)

### Resources

I found the following links useful:

* http://webpack.github.io/docs/tutorials/getting-started/
* http://survivejs.com/webpack_react/developing_with_webpack/
* https://medium.com/brigade-engineering/setting-up-webpack-with-rails-c62aea149679#.7p97k8sff
* https://github.com/flarnie/webpack_rails_demo/blob/master/webpack.config.js

[enzyme]: https://github.com/airbnb/enzyme
[expect-jsx]: https://github.com/algolia/expect-jsx
[expect]: https://github.com/mjackson/expect
[extract-text-plugin]: https://github.com/webpack/extract-text-webpack-plugin
[karma]: https://karma-runner.github.io
[mocha]: https://mochajs.org/
[react-test-utils]: https://facebook.github.io/react/docs/test-utils.html
