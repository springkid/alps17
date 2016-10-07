import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import { Artists } from '../imports/api/artists.js';

import './main.html';

// HELPERS
Template.artistListElement.helpers({
	artists() {
    	return Artists.find({}, { sort: { name: 1 } });
  	},
});


// EVENTS
Template.searchContent.events({
	"submit #new-artist": function(event){
		event.preventDefault();
		
	    // Get value from form element
	    const target = event.target;
	    const nameArtist = target.searchText.value;

	    // Add artist to Poll Table
	    Artists.insert({
	    	name: nameArtist,
	    	createdBy: 'jose',
	    	createdAt: new Date(),
	    });

		// Buscar en discogs a través de la API. 
		// Como está definido todo en un server block, lo hacemos con un Meteor.call
/*		Meteor.call("searchDiscogs",function(err, res) {
			if (!err) {
				console.log(res);
				return res;
			}
			else {
				console.log('error in Search');
			}
		});*/

    	// Clear form
    	target.searchText.value = '';

	}
})
