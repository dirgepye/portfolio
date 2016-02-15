module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'css/style.css': 'scss/style.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'build/style.scss': ['css/style.css']
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass','cssmin']
            }
        }
       
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['watch']);
}