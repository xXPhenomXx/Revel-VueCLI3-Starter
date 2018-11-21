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

### Required:

* [Setup Node/NPM](https://www.npmjs.com/get-npm)
* [Setup Revel](https://revel.github.io/tutorial/gettingstarted.html)

### Setup Instructions
1. Install Node - Confirm 'npm' command works from command line
2. Install Golang and setup GOPATH/GOROOT per your environment
3. Install Revel framework and Revel command line tool
4. Clone Revel-VueCLI3-Starter to your GOPATH/src directory
5. To run Vue frontend development server - 'cd public/vue-frontend'
5a. 'npm install'
5b. 'npm run serve'
6. To deploy Vue app to Revel
6a. 'npm run build'
7. To run Revel server w/Vue app
7a. revel run -a revel-app


### Start the Development server for the frontend Vue application

    cd public/vue-frontend

    npm install        # loads all the dependencies
    npm run server     # starts the dev server for the frontend

### Go to http://localhost:8080 and you'll see:
       
![alt text](https://i.stack.imgur.com/e1SvV.png)

Building your application frontend leveraging NPM/Webpack/Vue CLI you get complete hot-reloading and instant checking of your code.

### To deploy the application to Revel for rendering

    npm run build

The npm build process will handle all of the testing, transpiling, and bundling of your frontend assets. Once complete Webpack will move all of your assets into Revels /public/ folder along with moving your entry point index.html into Revel's View folder.


### Start the backend Revel server:

    revel run -a revel-app

### Go to http://localhost:9000/ and you'll see:

![alt text](https://i.stack.imgur.com/e1SvV.png)

## Code Layout

The directory structure of a generated Revel application:

    conf/             Configuration directory
        app.conf      Main app configuration file
        routes        Routes definition file

    app/              App sources
        init.go       Interceptor registration
        controllers/  App controllers go here
        models/       Model / database schema definitions go here  
        views/Vue     Main template and entry point, generated when a 'npm run build' is run from the Vue CLI (public/vue-frontend)

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

