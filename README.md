**A starter project for getting up and running with react, react-router, webpack, and hot-reloading.**

## Getting Started
1. Fork the repo to make your own copy
2. Install npm modules

```
npm install
```

And that's it!

## Webpack Dev Server
Run the following in a terminal:

```
npm test
```

And point your browser to localhost:8080. As long as that terminal is running, any changes you make to components or index.less will be hot-reloaded.

## Webpack & Production
To build your files with webpack for use in production:

```
npm run build
```

If you want to test a local version of your production bundle (be sure you've run 'npm run build' first), run the following and point your browser to localhost:3000. Note that webpack by itself will not hot-reload your files.

```
npm start
```

Or if you want to combine the above 2 steps:

```
npm run deploy
```

** WARNING
npm start and npm run deploy use forever to run the server. Be sure to use

```
npm stop
```

In order to stop the server when you're finished with it.
