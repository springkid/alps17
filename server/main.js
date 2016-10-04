import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	// code to run on server at startup
	// Instantiation of Discogs API keys
	var secretDiscogsAccessCode = Meteor.settings.discogs.consumerKey;
	const discogs = new Discogs();
	search = discogs.search('foo fighters');
	console.log('Searched for Foo Fighters' + search);

});
