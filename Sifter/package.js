// package metadata file for Meteor.js
var packageName = 'hatachino1:sifter';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.0.1';
var summary = 'A library for textually searching arrays and hashes, designed specifically for autocomplete.';
var gitLink = 'https://github.com/brianreavis/sifter.js';
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
    
    api.addFiles('src/sifter.min.js', where); // Files in use
});
