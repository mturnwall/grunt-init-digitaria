/* global exports */
/**
 *  grunt-init-digitaria
 *
 *  Project scaffolding using grunt.js for Digitaria projects
 *  
 *  Copyright (c) 2013 Digitaria, Inc.
 *  Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Project scaffolding using grunt.js for Digitaria projects.';

// Template-specific notes to be displayed before question prompts.
// exports.notes = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '';

// The actual init template
exports.template = function(grunt, init, done) {
    
    init.process({}, [
        init.prompt('name'),
        init.prompt('title'),
        init.prompt('description'),
        init.prompt('version'),
        init.prompt('repository', ''),
        init.prompt('jquery_version'),
        {
            name: 'config_rb_path',
            message: 'Path to the config.rb file',
            warning: 'If it\'s drupal the path will be /sites/all/themes/project-name'
        },
        {
            name: 'handlebars',
            message: 'Are handlebars templates going to be used?',
            default: 'y/N'
        },
        {
            name: 'unitTests',
            message: 'Will there be javascript unit testing?',
            default: 'y/N'
        }

    ], function (err, props) {
        var files;

        props.handlebars = /y/i.test(props.handlebars);
        props.unitTests = /y/i.test(props.unitTests);

        props.author_name = 'Digitaria, Inc';
        props.author_url = 'http://www.digitaria.com';
        props.devDependencies = {
            "grunt": "~0.4.2",
            "grunt-contrib-concat": "~0.3.0",
            "grunt-contrib-jshint": "~0.7.2",
            "grunt-contrib-watch": "~0.5.3",
            "grunt-contrib-compass": "~0.7.0",
            "grunt-contrib-clean": "~0.5.0",
            "grunt-contrib-copy": "~0.4.1",
            "matchdep": "~0.3.0",
            "grunt-contrib-imagemin": "~0.4.0"
        };

        // Files to copy (and process).
        files = init.filesToCopy(props);

        // Actually copy (and process) files.
        init.copyAndProcess(files, props);

        // create empty directories
        grunt.file.mkdir('js/vendors');

        if (props.handlebars) {
            props.devDependencies['grunt-contrib-handlebars'] = '~0.6.0';
        }

        if (props.unitTests) {
            /*
                TODO
                Find a good grunt plugin for javascript unit tests (mocha+chai)
             */
        }        

        init.writePackageJSON('package.json', props);

        done();
    });
};

