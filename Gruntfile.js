module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({

        concat: {
            default: {
                src: [
                    './public/vendor/jquery/jquery.js',
                    './public/vendor/bootstrap/dist/js/bootstrap.js',
                    './src/assets/js/frontend.js'
                ],
                dest: './src/www/js/frontend.js',
            }
        },
        less: {
            default: {
                options: {
                    compress: true,  //minifying the result
                },
                files: {
                    "./src/www/css/frontend.css": "./src/assets/css/frontend.less"
                }
            }
        },
        uglify: {
            options: {
                mangle: false  // Use if you want the names of your functions and variables unchanged
            },
            default: {
                files: {
                    './src/www/js/frontend.js': './src/www/js/frontend.js',
                }
            },
        }
    });

    grunt.registerTask('all', 'Less Concat Uglify',['less','concat','uglify'] );


}