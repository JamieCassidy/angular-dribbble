module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9000,
                    keepalive: true
                }
            }
        }
    });

    var dep, pkg;

    pkg = grunt.file.readJSON("package.json");

    for (dep in pkg.devDependencies) {
        if (dep.indexOf("grunt-") === 0) {
            grunt.loadNpmTasks(dep);
        }
    }

    //default task
    grunt.registerTask("server", [
        "connect"
    ]);

    grunt.registerTask("default", "server");

};