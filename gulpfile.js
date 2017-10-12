const gulp = require('gulp')
const glob = require('glob')
const sources = require('./config/sources')
const tasks = require('./config/tasks')
const path = require('path')

// Call functions for export tasks
glob.sync(path.resolve(__dirname, './tasks/*.js'), { realPath: true })
  .forEach(function (file) {
    require(file)(gulp, [], sources)
})

// Task for dev
require(path.resolve(__dirname, './tasks/dev.js'))(gulp, tasks.devTasks, sources)

// Task for build
require(path.resolve(__dirname, './tasks/build.js'))(gulp, tasks.buildTasks, sources)
