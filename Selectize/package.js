// package metadata file for Meteor.js
var packageName = 'hatachino1:selectize';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.0.1';
var summary = 'Selectize is a jQuery-based custom <select> UI control.';
var gitLink = 'https://github.com/selectize/selectize.js';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
    name: packageName,
    version: version,
    summary: summary,
    git: gitLink,
    documentation: documentationFile
});

Package.onUse(function(api) {
    api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions

    api.use('jquery@1.11.4', where); // Dependencies
    api.use('hatachino1:sifter@0.0.1', where); // Dependencies
    api.use('hatachino1:microplugin@0.0.1', where); // Dependencies

    api.addFiles('src/selectize.css', where); // Files in use
    api.addFiles('src/selectize.min.js', where); // Files in use
});
