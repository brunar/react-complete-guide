# React Complete Guide

# Radium

Radium is a popular package for react which allows us to use **Inline Styles Javascript** with **Pseudo Selectors** and **Media Queries**

### Install Package
```sh
npm install --save radium
```

### Import and Export

You can use this on both components created with **class and extends component** as well as **functional components**. To export wrap your component inside component Radium(); See example bellow:
```js
import Radium from 'radium';
export default Radium(my-component-name);
```