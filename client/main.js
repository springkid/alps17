import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// Instantiation
var secretDiscogsAccessCode = Meteor.settings.consumerKey;
const discogs = new Discogs();