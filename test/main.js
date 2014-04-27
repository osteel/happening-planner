var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/.*_test\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base',

  paths: {
    'jquery': 'src/bower-components/jquery/dist/jquery.min.js',
    'jasmine-jquery': 'src/bower-components/jasmine-jquery/lib/jasmine-jquery.js',
    'lodash': 'src/bower-components/lodash/dist/lodash.compat.min.js',
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});