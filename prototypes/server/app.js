var MapGenerator = require('./map-generator');
var Gameplay = require('./gameplay');
var Autobot = require('./autobot');
var mapGenerator = new MapGenerator();

var started = false;
var actions = ['', 'up', 'down', 'right', 'left'];

module.exports = {
  run: function(io) {
    if (started) {
      return;
    }

    var game = new Gameplay({
      io: io,
      map: mapGenerator.generate(10, 10),
      tick: 2000
    });

    var me = new Autobot('Me');
    var he = new Autobot('He');

    for (var i = 0; i < 50; i++) {
      me.addAction(actions[Math.floor(Math.random() * 5)]);
      he.addAction(actions[Math.floor(Math.random() * 5)]);
    }

    game.addPlayer(me);
    game.addPlayer(he);

    game.start();
  }
};
