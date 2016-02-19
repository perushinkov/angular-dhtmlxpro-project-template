// Generated on 2016-01-20 using generator-angular 0.15.1
'use strict';

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  require('jit-grunt')(grunt, {
    //Static configuration here
  });

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({
    // Project settings
    yeoman: appConfig,

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            //'.tmp',
            '<%= yeoman.dist %>/{,*/}*'//,
            //'!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      }
    },
    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: '127.0.0.1',
        livereload: 35730
      },
      livereload: {
        options: {
          open: true,
          base: '<%= yeoman.app %>'//,
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },
    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= yeoman.app %>',
            dest: '<%= yeoman.dist %>',
            src: [
              '*.{ico,png,txt}',
              '*.html',
              'root/{,*/}*.html',
              'root/{,*/}*.js',
              'app.js',
              'assets/{,*/}*.*',
              'components/**/*'
            ]
          }
        ]
      }
    },
    fileExists: {
      scripts: [
        '<%= yeoman.app %>/libs/dhtmlx/codebase',
        '<%= yeoman.app %>/libs/dhtmlx/sources'
      ]
    },
    // Watches files for changes and runs tasks based on the changed files
    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.dist %>/**/*'
        ]
      }
    },
    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath: /\.\.\//
      }
    },
    wiredepCopy: {
      target: {
        options: {
          src: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          wiredep: {}
        }
      }
    }
  });
  //
  //
  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    console.log(target);
    grunt.task.run([
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('build', [
    'fileExists',
    'clean:dist',
    'wiredep',
    'copy:dist',
    'wiredepCopy'
  ]);
};
