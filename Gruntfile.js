module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodemon: {
      dev: {
        script: './bin/www'
      }
    }
  });

  //grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-qunit');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-nodemon');

  //grunt.registerTask('test', ['jshint', 'qunit']);

  //grunt.registerTask('default', ['jshint','concat', 'uglify', 'nodemon']);

  grunt.registerTask('default',['nodemon']);

};




