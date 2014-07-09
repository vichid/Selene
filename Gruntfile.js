module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
        src: [
          'assets/js/*.js',
          'bower_components/fancybox/source/jquery.fancybox.pack.js'
        ],
        dest: 'assets/js/build/production.js',
      },
      style: {
        src: [
          'assets/css/style.css',
          'bower_components/animate.css/animate.min.css',
          'bower_components/fancybox/source/jquery.fancybox.css'
        ],
        dest: 'assets/css/build/production.css',
      }
    },
    uglify: {
      build: {
        src: 'assets/js/build/production.js',
        dest: 'assets/js/build/production.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('default', ['concat','uglify']);

};