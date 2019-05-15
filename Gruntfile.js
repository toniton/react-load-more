module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      files: ['dist/*'],
      tasks: ['jshint', 'uglify'],
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> last updated: <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        expand: true,
        src: ['dist/**/<%= pkg.name %>.js', '!dist/<%= pkg.name %>.js'],
        dest: '.',
        cwd: '.',
        rename: (dst, src) =>
          dst + '/' + src.replace('.js', '.min.js')
      }
    },
    jshint: {
        all: ['dist/**/*.js']
    },
    clean: {
      build: {
        src: ['dist/**/*.js', 'dist/**/*.js.map', '!dist/<%= pkg.name %>.js']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['uglify']);
};