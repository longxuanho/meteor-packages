// package metadata file for Meteor.js
var packageName = 'hatachino1:autosize';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.0.1';
var summary = 'Small, stand-alone script to automatically adjust textarea height to fit text';
var gitLink = 'http://github.com/jackmoore/autosize.git';
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

    api.addFiles('src/autosize.min.js', where); // Files in use
});
