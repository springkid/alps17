import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


/* Helpers */ 
Template.artistListElement.helpers({
  artists: [
    { name: 'Shellac', addedBy: '{Pere, Jose}', confirmedTrue: 'No' },
    { name: 'Triangulo de Amor Bizarro', addedBy: '{Jose}', confirmedTrue: 'No' },
    { name: 'Metallica', addedBy: 'Jose', confirmedTrue: 'No' },
  ],
});