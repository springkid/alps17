import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session'

import './main.html';


// HELPERS
Template.artistListElement.helpers({
  artists: [
    { name: 'Shellac', addedBy: '{Pere, Jose}', confirmedTrue: 'No' },
    { name: 'Triangulo de Amor Bizarro', addedBy: '{Jose}', confirmedTrue: 'No' },
    { name: 'Metallica', addedBy: 'Jose', confirmedTrue: 'No' },
  ],
});

// EVENTS
Template.searchContent.events({
	"submit #new-artist": function(event){
		event.preventDefault();
		
	    // Get value from form element
	    const target = event.target;
	    console.log(target.searchText.value);

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
