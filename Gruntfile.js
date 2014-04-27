module.exports = function(grunt) {
  
  grunt.initConfig({
    
    clean: {
      files: ['dist']
    },
    
    copy: {
      prod: {
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
      'karma:unit'
    ]      
  );
};