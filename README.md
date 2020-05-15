
# React Complete Guide

> Install **Node.js**

### Install create-react-app global

```sh
sudo npm install create-react-app -g
yarn global add create-react-app
```

- cd into the parent folder
- And the next command will create another folder with the name of the project

### Create a react Project App
```sh
create-react-app my-app --scripts-version 1.1.5
```

# Radium

Radium is a popular package for react which allows us to use **Inline Styles Javascript** with **Pseudo Selectors** and **Media Queries**

### Install Package

```sh
yarn add radium
npm install --save radium
```

### Import and Export

You can use this on both components created with **class and extends component** as well as **functional components**. To export wrap your component inside component Radium(); See example bellow:

```js
import  Radium  from  'radium';

export  default  Radium(my-component-name);
```

# Styled Components

Styled Components is a package of Es6 and CSS to style your component dynamically.

### Install Package

```sh
yarn add styled-components
npm install --save styled-components
```

# CSS Modules

**CSS modules** automatically generate unique CSS class names behind when webpack compiles it.

**Create-React-App** supports css modules right out of the box as of version 2, which is now stable. Upgrade to v2 (react-scripts@latest) and do not need to eject. 

```sh
yarn upgrade react-scripts@latest.
```

####  For Old version of react-script have to eject the Config Folder from Webpack
#### Ejecting the Config Folder from Webpack (5-73)
- Run yarn eject to edit Config Folder: `webpack.config.dev.js` and `webpack.config.prod.js`

```sh
yarn eject
npm run eject
```

- It will show Folder Config, then edit the files: `webpack.config.dev.js` and `webpack.config.prod.js`

- In the file scroll down until you find this test CSA ( test: /\.css$/) and add this two lines inside options
`modules:  true,`
`localIdentName:  '[name]__[local]__[hash:base64:5]'`

File Example:
```JS
{
test: /\.css$/,
use: [
	require.resolve('style-loader'),
	{
		loader:  require.resolve('css-loader'),
		options: {
			importLoaders:  1,
			modules:  true,
			localIdentName:  '[name]__[local]__[hash:base64:5]'
		},
	},
	]
}
```
## Working with Css Modules
  
### 1.  Create Css Modules File
  
You just have to create a CSS file with the extension `.module.css` and add a class example `.myStyle`
```css
.myStyle {
	color: #fff
}
```

### 2. Importing and Using Css Modules
```js
import  React  from  'react'
import  styles  from  'mycssmodule.module.css'

export  default () =>  <div className={styles.myStyle}>We are styled!</div>
```
#####  Another Example:
```js
import  classes  from  './App.css'; //Classes will work like a props for css, you can choose any name

<button  className={classes.Button}>Text</button>
```
 