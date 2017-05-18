/**
 * Created by chenqb on 2015/7/4.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                globals: {
                    jQuery: true
                }
            },
            files: ['src/js/*.js']
        },
        uglify: {
            options: {
                banner: '/** ! created at <%= grunt.template.today("yyyy-mm-dd") by cqb %> */\n'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/dist',
                    src: ['**/*.js'],
                    dest: './assets/min',
                    ext: '.js'
                }]
            }
        },
        less: {
            main: {
                files: [{
                    expand: true,
                    cwd: './src/less/',
                    src: ['**/*.less'],
                    dest: './assets/css/',
                    ext: '.css'
                }]
            },
            compileCore: {
                options: {
                    strictMath: true,
                    outputSourceFiles: true
                }
            }
        },
        cssmin: {
            options: {
                compatibility: 'ie8',
                keepSpecialComments: '*',
                advanced: false
            },
            minifyCore: {
                files: [{
                    expand: true,
                    cwd: './assets/css/',
                    src: ['**/*.css','!**/*.min.css'],
                    dest: './assets/css/',
                    ext: '.min.css'
                }]
            }
        },
        babel: {
            options: {
                presets: ['es2015','react'],
                "plugins": ["transform-es2015-modules-amd","transform-class-properties",
                    "syntax-class-properties","transform-object-assign"]
            },
            doc: {
                files: [{
                    "expand": true,
                    "cwd": "src/jsx",
                    "src": ["**/*.jsx","**/**/*.jsx"],
                    "dest": "assets/modules",
                    "ext": ".js"
                }]
            }
        },

        watch: {
            jsx: {
                files: ['src/jsx/**/*.jsx'],
                tasks: ["babel"]
            },
            less: {
                files: ['src/less/**/*.less'],
                tasks: ["less","cssmin"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');

    // 只需在命令行上输入"grunt"，就会执行default task
    grunt.registerTask('default', ['watch']);
};
