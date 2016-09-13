module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    //grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({

        concat: {
            default: {
                src: [
                    './public/vendor/jquery/jquery.js',
                    './public/vendor/bootstrap/dist/js/bootstrap.js'

                ],
                dest: './src/app/js/bsjq.js',
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
                    './src/app/js/bsjq.js': './src/app/js/bsjq.js',
                }
            },

        },
        clean: ["src/app/css","src/app/fonts","src/app/js","src/app/node_modules"],
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
        , "node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js"
                      ], dest: './src/app'
                  },
                  { expand: true, src: "frontend.js", cwd: "src/assets/js/", dest: './src/app/js' },
                  { expand: true, src: "tggtfont.otf", cwd: "src/assets/fonts/", dest: './src/app/fonts' },
                { expand: true, src: "*", cwd: "public/vendor/font-awesome/fonts/", dest: './src/app/fonts' }

                ],
            }
        },
    });

    grunt.registerTask('all', 'Less Concat Uglify', ['less', 'concat', 'uglify', 'copy']);
    grunt.registerTask('rebuild', 'Clean Less Concat Uglify', ['clean','less', 'concat', 'uglify', 'copy']);


}