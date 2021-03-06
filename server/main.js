import { Meteor } from 'meteor/meteor';
import '../imports/api/artists.js';

Meteor.startup(() => {
	// Instantiation of Discogs API keys
	var secretDiscogsAccessCode = Meteor.settings.discogs.consumerKey;
	discogs = new Discogs();
});

// Server methods
Meteor.methods({
	searchDiscogs: function(queryDiscogs) {
		search = discogs.search(queryDiscogs);
		return search;
		console.log(search);
	}
});
