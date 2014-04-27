// Karma configuration
// Generated on Fri Mar 28 2014 16:38:42 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
//      'src/bower-components/jquery/dist/jquery.min.js',
//      'src/bower-components/jasmine-jquery/lib/jasmine-jquery.js', // v. 1.7.0 for compatibility reasons
//      'src/bower-components/lodash/dist/lodash.compat.min.js',
//      'src/happening-planner.js',
//      'test/happening-planner_test.js',
      
      // library
      {pattern: 'src/happening-planner.js', included: false},
      
      // test bootstrap
      'test/main.js',
      
      // fixtures
      {pattern: 'test/mock/*.json', watched: true, served: true, included: false},
      
      // tests
      {pattern: 'test/happening-planner_test.js', included: false}
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    
    plugins: [
      "karma-jasmine",
      "karma-requirejs",
      "karma-phantomjs-launcher"
    ]
  });
};