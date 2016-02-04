module.exports = function(grunt) {
  grunt.initConfig({
    jasmine: {
      pivotal: {
        src: [
          'lib/jquery-1.12.0.js',
          'lib/jquery.json.min.js',
          'jquery.simple.websocket.js'
        ],
        timeout: 120000,
        options: {
          specs: 'tests/tests.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');

 // Default task.
  grunt.registerTask('default', 'jasmine');
};
