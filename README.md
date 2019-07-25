# ts-react-multiple-spa

Simple TypeScript project that allows for multiple React Single Page Applications (SPAs). I use this when I need to create one or more React SPAs. 

The build runs TypeScript React components thru Webpack with the Babel plugin and "flattens" the directory structure to that of a traditonal web application.

## Steps to Setup

The easiest way is to use this as a [template when creating a new GitHub repo](https://github.com/TylerDurham/ts-react-multiple-spa/generate). You can also run from the command line:

```
    git clone https://github.com/TylerDurham/ts-react-multipage-spa.git
    mv ts-react-multipage-spa my-spa-project && cd my-spa-project
    yarn install -y
    gulp serve
```

## Project Structure

The source directory structure allows for directories to be used to organize React components. 

```
* /src
    * /components
        * header.tsx
    * /spa1
        * spa1.html
        * spa1.tsx
        * /images
            * spa1.png
    * /spa2
        * spa2.html
        * spa2.tsx
        * /images
            * spa2.png
    * index.html
    * index.tsx
```

When you build the project, the assets transpile (and flattens) to this

```
* /build
    * /images
        spa1.png
        spa2.png
        logo.png
    * /js
        * index.bundle.js
        * spa1.bundle.js
        * spa2.bundle.js
    * index.html
    * spa1.html
    * spa2.html
```

## Adding or Modifying Single Page Apps

To add/modify single page app instances, simply modify *[webpack.config.js](https://github.com/TylerDurham/ts-react-multiple-spa/blob/master/webpack.config.js)* and add/remove your SPA entry points. Any HTML files in your component directory will be copied to *./build*, and image files will be copied to *./build/images*. Transpiled and bundled TSX files will be copied to the *./build/js* directory.

```
    entry: {
        'index': `${sourceBase}/index.tsx`,
        'spa1': `${sourceBase}/spa1/spa1.tsx`,
        'spa2': `${sourceBase}/spa2/spa2.tsx`
        ... and so on
    },

```