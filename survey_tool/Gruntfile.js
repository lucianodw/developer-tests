'use strict';

module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'assets/css/main.css': 'app/app.scss'
            }
        }
    },

    connect: {
      web: {
        options: {
          port: 9000,
          bases: '.',
          keepalive: true
        }
      }
    },

    watch: {
      dev: {
        files: ['**/*.scss'],
        tasks: ['build-sass']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('dev', ['sass', 'connect:web']);

}