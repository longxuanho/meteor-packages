// package metadata file for Meteor.js
var packageName = 'hatachino1:waves';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.0.2';
var summary = 'Click effect inspired by Google\'s Material Design';
var gitLink = 'https://github.com/fians/Waves';
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

    // api.use('DEPENDENCY_NAME', where); // Dependencies

    api.addFiles('src/waves.min.css', where); // Files in use
    api.addFiles('src/waves.min.js', where); // Files in use
});
