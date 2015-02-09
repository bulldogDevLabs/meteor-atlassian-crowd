# meteor-atlassian-crowd
A Meteor package for the Atlassian Crowd nodejs module.

## Status

This is v0.0.1 of the meteor package. We are just now begining to test.

## Setup

* Clone this repo
* <code>cd /path/to/meteor/app<code>
* <code>mkdir packages<code>
* <code>ln -s /path/to/meteor-atlassian-crowd packages/meteor-atlassian-crowd<code>
* <code>meteor add elosoman:meteor-atlassian-crowd<code>
* Create an instance of crowd with your config options.
* <code>
var atlassianCrowdConfig = { };
crowd = atlassianCrowd( atlassianCrowdConfg );
<code>

Future releases may be published through meteor atmospherejs ... stay tuned.

## Documentation

Access the module in js as <code>AtlassianCrowd</code>.

## Miscellany

Further documenation about Atlassian Crow applications.
https://confluence.atlassian.com/display/CROWD/Adding+an+Application#AddinganApplication-add

## Kudos

Uses the node package to facilitate access and api calls to atlassian-crowd package.
https://www.npmjs.com/package/atlassian-crowd

