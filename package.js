

// ---------------------------------------------
// Description

Package.describe({

	name: 'meteor-atlassian-crowd',
	version: '0.0.1',
	summary: 'A Meteor package for atlassian crowd nodejs module.',
	git: 'https://github.com/elosoman/meteor-atlassian-crowd',
	documentation: 'README.md'

});


// ---------------------------------------------
// Use

Package.onUse(function(api) {

	api.versionsFrom('1.0.3.1');
	api.addFiles('lib/meteor-atlassian-crowd.js');

});


// ---------------------------------------------
// Tests

Package.onTest(function(api) {

	api.use('tinytest');
	api.use('meteor-atlassian-crowd');
	api.addFiles('meteor-atlassian-crowd-tests.js');

});

// ---------------------------------------------
// NPM Dependency

Npm.depends({ 'atlassian-crowd': '0.4.4' });


