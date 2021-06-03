# reactjs-ssr
react js server side rendering using webpack and babel

## Modules Requirement :

1. babel
   
   1.1. @babel/core

   1.2. @babel/cli

   1.3. @babel/register (server dev only)

   1.4. @babel/preset-env 

   1.5. @babel/preset-react

   1.6. @babel/plugin-transform-arrow-functions

   1.7. @loadable/babel-plugin

   ```markdown
   npm i -D @babel/core @babel/cli @babel/register @babel/preset-env @babel/preset-react @babel/plugin-transform-arrow-functions @loadable/babel-plugin
   ```

2. webpack

   2.1. webpack

   2.2. webpack-cli

   2.3. webpack-dev-server

   2.3. webpack-node-externals (server only)

   2.4. webpack-bundle-analyzer (client analyze only)

   2.5. babel-loader

   2.6. css-loader

   2.7. mini-css-extract-plugin (client only)

   2.8. @loadable/webpack-plugin

   ```markdown
   npm i -D webpack webpack-cli webpack-dev-server webpack-node-externals webpack-bundle-analyzer babel-loader css-loader mini-css-extract-plugin @loadable/webpack-plugin
   ```

3. server

   3.1. express

   3.2. dotenv

   3.3. @loadable/server

4. client

   4.1. @loadable/component

5. apps

   5.1. react

   5.2. react-dom

   5.3. react-router-dom

   5.4. redux

   5.5. react-redux

   5.6. redux-thunk

   5.7. react-helmet

   5.8. axios

   5.9. socket.io

   ```markdown
   npm i express dotenv @loadable/server @loadable/component react react-dom react-router-dom redux react-redux redux-thunk react-helmet axios socket.io
   ```