module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bowercopy: {
      options: {
        clean: true,
      },
      libs: {
        options: {
          destPrefix: 'public/lib/'
        },
        files : {
          'bootstrap/css': 'bootstrap/dist/css',
          'bootstrap/js': 'bootstrap/dist/js',
          'bootstrap/fonts': 'bootstrap/dist/fonts',
          'jquery': 'jquery/dist'
        }
      }
    },
    less: {
      development: {
        expand: true,
        cwd: 'public/stylesheets',
        src: '*.less',
        dest: 'public/stylesheets',
        ext: '.css'
      }
    },
    concurrent: {
      target: {
        tasks: ['watch', 'nodemon'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    watch: {
      less: {
        files: ['public/stylesheets/*.less'],
        tasks: ['less']
      }
    },
    nodemon: {
      dev: {
        script: './bin/www'
      }
    }
  });

  //grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-qunit');
  //grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-bowercopy');

  //grunt.registerTask('test', ['jshint', 'qunit']);

  //grunt.registerTask('default', ['jshint','concat', 'uglify', 'nodemon']);

  grunt.registerTask('default',['bowercopy:libs', 'less','concurrent:target']);

};




