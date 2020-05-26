This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### theming is done for antd library using craco, craco-less

In the real world, we usually have to modify default webpack config for custom needs such as themes. We can achieve that by using craco which is one of create-react-app's custom config solutions.

Install craco and modify the scripts field in package.json.

\$ npm add @craco/craco
/_ package.json _/
"scripts": {

- "start": "react-scripts start",
- "build": "react-scripts build",
- "test": "react-scripts test",

* "start": "craco start",
* "build": "craco build",
* "test": "craco test",
  }
  Then create a craco.config.js at root directory of your project for further overriding.

/_ craco.config.js _/
module.exports = {
// ...
};
Customize Theme#
According to the Customize Theme documentation, we need to modify less variables via loader like less-loader. We can use craco-less to achieve that,

First we should modify src/App.css to src/App.less, then import less file instead.

/_ src/App.js _/

- import './App.css';

* import './App.less';
  /_ src/App.less _/

- @import '~antd/dist/antd.css';

* @import '~antd/dist/antd.less';
  Then install craco-less and modify craco.config.js like below.

\$ npm add craco-less
`const CracoLessPlugin = require('craco-less');

module.exports = {
plugins: [
{
plugin: CracoLessPlugin,
options: {
lessLoaderOptions: {
modifyVars: { '@primary-color': '#1DA57A' },
javascriptEnabled: true,
},
},
},
],
};`
