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
	"click #js-search-discogs": function(event){
		console.log('clicked submit de search');
		// Buscar en discogs a través de la API. 
		// Como está definido todo en un server block, lo hacemos con un Meteor.call
		Meteor.call("searchDiscogs",function(err, res) {
			console.log(res);
			console.log('Searched for Foo Fighters from the client');
		});

	}
})
