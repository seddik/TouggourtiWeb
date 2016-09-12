module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({

        concat: {
            default: {
                src: [
                    './public/vendor/jquery/jquery.js',
                    './public/vendor/bootstrap/dist/js/bootstrap.js',
                    './src/assets/js/frontend.js'
                ],
                dest: './src/app/js/frontend.js',
            }
        },
        less: {
            default: {
                options: {
                    compress: true,  //minifying the result
                },
                files: {
                    "./src/app/css/frontend.css": "./src/assets/css/frontend.less"
                }
            }
        },
        uglify: {
            options: {
                mangle: false  // Use if you want the names of your functions and variables unchanged
            },
            default: {
                files: {
                    './src/app/js/frontend.js': './src/app/js/frontend.js',
                }
            },

        },
        copy: {
            default: {
                files: [

                  {
                      expand: true, src: ["node_modules/core-js/client/shim.min.js"
        , "node_modules/zone.js/dist/zone.js"
        , "node_modules/reflect-metadata/Reflect.js"
        , "node_modules/rxjs/bundles/Rx.umd.js"
        , "node_modules/@angular/core/bundles/core.umd.js"
        , "node_modules/@angular/common/bundles/common.umd.js"
        , "node_modules/@angular/compiler/bundles/compiler.umd.js"
        , "node_modules/@angular/platform-browser/bundles/platform-browser.umd.js"
        , "node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js"], dest: './src/app'
                  },


                ],
            }
        },
        });

    grunt.registerTask('all', 'Less Concat Uglify',['less','concat','uglify','copy'] );


}