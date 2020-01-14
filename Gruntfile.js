'use strict';

module.exports = function (grunt) {
    // Time how long tasks take. Can help when optimizing build times
    require('./node_modules/time-grunt')(grunt);

    // Automatically load required Grunt tasks
    require('./node_modules/jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
      });

    // Define the configuration for all the tasks
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        }
        ,
        watch: {
            files: 'css/*.scss',
            tasks: ['sass']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html',
                        '*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        }
        ,

        copy: {
            html: {
                files: [
                {
                    //for html
                    expand: true,
                    dot: true,
                    cwd: './',
                    src: ['*.html'],
                    dest: 'dist'
                }]                
            },
            fonts: {
                files: [
                {
                    //for font-awesome     node_modules/@fortawesome/fontawesome-free
                    expand: true,
                    dot: true,
<<<<<<< HEAD
                    cwd: 'node_modules/@fortawesome/fontawesome-free/webfonts',
                    src: ['*.*'],
                    dest: 'dist/webfonts/'
=======
                    cwd: 'node_modules/@fortawesome',
                    src: ['fontawesome-free/*.*'],
                    dest: 'dist'
>>>>>>> 127f887f59af03753bf2efc39b319c8f159284e9
                }]
            }
        },

        clean: {
            build: {
                src: [ 'dist/']
            }
        }
        ,
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: './',                   // Src matches are relative to this path
                    src: ['img/*.{png,jpg,gif,jpeg}'],   // Actual patterns to match
                    dest: 'dist/'                  // Destination path prefix
                }]
            }
        }
        ,
        //'contactus.html','aboutus.html'
        useminPrepare: {
            foo: {
                dest: 'dist',
<<<<<<< HEAD
                src: ['index.html']
=======
                src: ['index.html'] //'contactus.html','aboutus.html'
>>>>>>> 127f887f59af03753bf2efc39b319c8f159284e9
            },
            options: {
                flow: {
                    steps: {
                        css: ['cssmin'],
                        js:['uglify']
                    },
                    post: {
                        css: [{
                            name: 'cssmin',
                            createConfig: function (context, block) {
                            var generated = context.options.generated;
                                generated.options = {
                                    keepSpecialComments: 0, rebase: false
                                };
                            }       
                        }]
                    }
                }
            }
        },

        // Concat
        concat: {
            options: {
                separator: ';'
            },
  
            // dist configuration is provided by useminPrepare
            dist: {"dist/js/omar.js":"js/scripts.js"}
        },

        // Uglify
        uglify: {
            // dist configuration is provided by useminPrepare
            dist: {}
        },

        cssmin: {
            dist: {}
        },

        // Filerev
        filerev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 20
            },
  
            release: {
            // filerev:release hashes(md5) all assets (images, js and css )
            // in dist directory
                files: [{
                    src: [
                        'dist/js/*.js',
                        'dist/css/*.css',
                    ]
                }]
            }
        },
  
        // Usemin
        // Replaces all assets with their revved version in html and css files.
        // options.assetDirs contains the directories for finding the assets
        // according to their relative paths
<<<<<<< HEAD
        //'dist/contactus.html','dist/aboutus.html',
=======
        //'dist/contactus.html','dist/aboutus.html'
>>>>>>> 127f887f59af03753bf2efc39b319c8f159284e9
        usemin: {
            html: ['dist/index.html'],
            options: {
                assetsDirs: ['dist', 'dist/css','dist/js']
            }
        },
                                //'dist/contactus.html': 'dist/contactus.html','dist/aboutus.html': 'dist/aboutus.html',
                      
        htmlmin: {                                         // Task
            dist: {                                        // Target
                options: {                                 // Target options
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'dist/index.html': 'dist/index.html',  // 'destination': 'source'
<<<<<<< HEAD
                    
=======
                    // 'dist/contactus.html': 'dist/contactus.html',
                    // 'dist/aboutus.html': 'dist/aboutus.html',
>>>>>>> 127f887f59af03753bf2efc39b319c8f159284e9
                }
            }
        }
    });

   grunt.registerTask('css', ['sass']);
   grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('build', [
        'clean',
        'copy',
        'imagemin',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin'
    ]);

};