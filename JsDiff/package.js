// package metadata file for Meteor.js
var packageName = 'hatachino1:jsdiff';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.0.1';
var summary = 'A javascript text diff implementation (v2.2.1)';
var gitLink = 'https://github.com/kpdecker/jsdiff.git';
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
    
    api.addFiles('src/diff.min.js', where); // Files in use
});
