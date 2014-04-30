var modRewrite = require('connect-modrewrite');

module.exports = function(grunt) {
  
  grunt.initConfig({
    
    connect: {
      test: {
        options: {
          port: 8080,
          base: 'src',
          keepalive: true,
          middleware: function(connect, options) {
            var middlewares = [];
            middlewares.push(
              modRewrite(['^[^\\.]*$ /index.html [L]']) // matches everything that does not contain a '.' (period)
            );
            options.base.forEach(function(base) {
              middlewares.push(connect.static(base));
            });
            return middlewares;
          }
        }
      }
    },
    
    clean: {
      files: ['dist']
    },
    
    copy: {
      dist: {
        expand: true,
        cwd: 'src/',
        src: ['happening-planner.js'],
        dest: 'dist/'
      }
    },
    
    uglify: {
      dist: {
        files: {
          'dist/happening-planner.min.js': ['src/happening-planner.js']
        }
      }
    },
    
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask(
    'dist',
    [
      'clean',
      'copy',
      'uglify:dist'
    ]
  );

  grunt.registerTask(
    'test',
    [
//      'karma:unit'
      'connect:test'
    ]      
  );
};