# Welcome to Revel - Vue CLI 3 Starter Kit

Revel is a high-productivity web framework for the [Go language](http://www.golang.org/).

Vue CLI is a full system for rapid Vue.js development [VueCLI ](https://cli.vuejs.org/).

VueJS The Progressive JavaScript Framework [VueJS ](https://vuejs.org/).

This starter kit combines the backend power of the Revel framework and the Golang language with the dynamic Vue.JS frontend language. This best of both worlds allows you to build reactive single page applications using Revel/Golang as your backend.

This kit is complete with Vue CLI3 which gives you a powerful command line tool to aid in your frontend application development along with Webpack which handles all of your asset bundling, test running, minification, and transpiling.

## Vue CLI 3 kit comes prebundled with the following:

* Vue.JS  (2.5.17)
* Vue Router (3.0.1)
* Vuex (3.0.1)
* Babel (3.1.1)
* Typescript (3.1.1)
* SASS processing
* Chai (4.1.0) / Mocha (5.2.4) Testing 

### Start the Development server for the frontend

    cd public/vue-frontend

    npm run server

### Go to http://localhost:8080 and you'll see:
       
       "Welcome to your Vue.JS + Typescript App"

Building your application frontend leveraging NPM/Webpack/Vue CLI you get complete hot-reloading and instant checking of your code.

### To deploy the application to Revel for Rendering

    npm run build

The npm build process will handle all of the testing, transpiling, and bundling of your frontend assets. Once complete Webpack will move all of your assets into Revels /public/ folder along with moving your entry point index.html into Revel's View folder.


### Start the backend Revel server:

    revel run revel-app

### Go to http://localhost:9000/ and you'll see:

    "Welcome to your Vue.JS + Typescript App"

## Code Layout

The directory structure of a generated Revel application:

    conf/             Configuration directory
        app.conf      Main app configuration file
        routes        Routes definition file

    app/              App sources
        init.go       Interceptor registration
        controllers/  App controllers go here
        models/       Model / database schema definitions go here  
        views/Vue     Main template and entry point, generated when a 'npm run build' is run from the Vue app

    messages/         Message files

    public/           Public static assets
        css/          CSS files
        js/           Javascript files
        img/          Image files
        fonts/        Font files
        vue-frontend  Vue CLI 3 application

    tests/            Test suites


## Help

* The [Getting Started with Revel](http://revel.github.io/tutorial/gettingstarted.html).
* The [Revel guides](http://revel.github.io/manual/index.html).
* The [Revel sample apps](http://revel.github.io/examples/index.html).
* The [API documentation](https://godoc.org/github.com/revel/revel).

