//SRSV: A game in space, styled in the form of Battlestar Galactica

var gamePrompt = require('game-prompt');
var colors = require('colors');

var gameName;
var destinations = [
  {
    name: 'Aerilon',
    distance: 10,
    handler: approachAerilon
  },
  {
    name: 'Aquaria',
    distance: 60,
    handler: approachAquaria
  },
  {
    name: 'Canceron',
    distance: 100,
    handler: approachCanceron
  },
  {
    name: 'Leonis',
    distance: 65,
    handler: approachLeonis
  },
  {
    name: 'Libran',
    distance: 90,
    handler: approachLibran
  },
  {
    name: 'Picon',
    distance: 20,
    handler: approachPicon
  },
  {
    name: 'Sagittaron',
    distance: 40,
    handler: approachSaggittaron
  },
  {
    name: "Scorpia",
    distance: 45,
    handler: approachScorpia
  },
  {
    name: "Tauron",
    distance: 100,
    handler: approachTauron
  },
  {
    name: "Virgon",
    distance: 35,
    handler: approachVirgon
  },
  {
    name: "Earth",
    distance: 120,
    handler: approachEarth
  },
];

function begin() {
  gamePrompt(['A Battlestar Galatica Adventure\nPress ENTER to start'.red],intro);
}

function intro() {
  gamePrompt([
    'You are the captain of the Battlestar Galactica, under the leadership ' +
    'of Commander William Adama on an expedition to find other living beings ' +
    'in space after the destruction of the Twelve Colonies.',
    'You mission is to make contact with three groups of survivors, acquire food, Tylium, ' +
    ' and tools, and make your way to settle on Earth.',
    'A voice comes over the intercom as you unlock the control room'.red,
    '"State your name for identification."'
  ], saveName);
}

function saveName(name) {
  gameName = name
  gamePrompt([
    "Thank you Captain " + gameName + "." +
    ' Please enter the control room.'
  ], enterControlRoom);
}

function enterControlRoom() {
  gamePrompt([
    'Commander Adama welcomes you to the control room' +
    '"Hello Captain "'.red + gameName + '"Lets begin to chart our course"'.red +
    '"Where to first?"'
  ], locationSelection);
}

function locationSelection() {
  gamePrompt([
      'Where would you like to go Captain?'
  ])
}

begin();
