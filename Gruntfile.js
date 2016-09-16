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
                    './public/vendor/jquery/src/jquery.js',
                    './public/vendor/bootstrap/dist/js/bootstrap.js'

                ],
                dest: './src/app/www/js/bsjq.js',
            }
        },
        less: {
            default: {
                options: {
                    compress: true,  //minifying the result
                },
                files: {
                    "./src/app/www/css/frontend.css": "./src/assets/css/frontend.less"
                }
            }
        },
        uglify: {
            options: {
                mangle: false  // Use if you want the names of your functions and variables unchanged
            },
            default: {
                files: {
                    './src/app/www/js/frontend.js': './src/app/www/js/frontend.js',
                    './src/app/www/js/bootstrap.js': './src/app/www/js/bootstrap.js',
                    './src/app/www/js/jquery.js': './src/app/www/js/jquery.js',
                }
            },

        },
        clean: ["src/app/www/css", "src/app/www/fonts", "src/app/www/js"],
        copy: {
            default: {
                files: [

                  
                  { expand: true, src: "*", cwd: "src/assets/js/", dest: './src/app/www/js' },
                  { expand: true, src: "*", cwd: "src/assets/fonts/", dest: './src/app/www/fonts' },
                { expand: true, src: "bootstrap.js", cwd: "public/vendor/bootstrap/dist/js/", dest: './src/app/www/js' },
                { expand: true, src: "jquery.js", cwd: "public/vendor/jquery/dist/", dest: './src/app/www/js' },
                { expand: true, src: "*", cwd: "public/vendor/font-awesome/fonts/", dest: './src/app/www/fonts' }

                ],
            }
        },
    });

    grunt.registerTask('all', 'Less Concat Uglify', ['less', 'concat', 'copy', 'uglify']);
    grunt.registerTask('rebuild', 'Clean Less Concat Uglify', ['clean', 'less', 'concat', 'copy', 'uglify']);


}