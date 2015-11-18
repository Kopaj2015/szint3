/*felhasznalok = new Mongo.Collection('felhasznalok');

Events = new Mongo.Collection('esemenyek');


foglalas = new Mongo.Collection('foglalas');*/


Events.insert({ date: "2015.11.18.", name: "Magyar - Norveg", home: 2, draw: 3, away: 2});
Events.insert({ date: "2015.11.19.", name: "Magyar - Roman", home: 1, draw: 2, away: 3});
Events.insert({ date: "2015.11.20.", name: "Norveg - Roman", home: 6, draw: 1, away: 3});

Events.insert({ date: "2015.11.18.", name: "Holland - Norveg", home: 3, draw: 3, away: 2.5});
Events.insert({ date: "2015.11.19.", name: "Holland - Roman", home: 3, draw: 2, away: 3});
Events.insert({ date: "2015.11.20.", name: "Holland - Magyar", home: 6, draw: 4, away: 3});

Events.insert({ date: "2015.11.18.", name: "Holland - Norveg", home: 3, draw: 3, away: 2.5});
Events.insert({ date: "2015.11.19.", name: "Holland - Roman", home: 3, draw: 2, away: 3});
Events.insert({ date: "2015.11.20.", name: "Holland - Magyar", home: 6, draw: 4, away: 3});