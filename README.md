# KMDB
AngularJS class mandatory assignment.

## WIP
I am still working on it. There are two branches of this project.
1. Master. This is where I tried more messy approach by linking each js file in index.html until
finally decided that I didn't like this structure.
2. Webpack. Packs all js files into one bundle.js file which is referenced
in index.html. Everything then is referenced via es6 import/export
from js alone.
I am still experimenting with [component](https://docs.angularjs.org/guide/component) approach of building angular app and also
tried using [component router](https://docs.angularjs.org/guide/component-router).
My idea is to stick with this webpack branch and merge it later into master.

## Run
`npm install` and `npm start` for both branches should work.