var counter = 0;

function Bullet(options) {
  this.type = Bullet.TYPE;
  this.id = Bullet.TYPE + '#' + counter;
  ++counter;

  this.health = 1;
  this.direction = options.direction;
}

Bullet.TYPE = 'bullet';

Bullet.prototype.hit = function() {
  this.health = 0;
};

Bullet.prototype.getState = function() {
  return {
    health: this.health
  };
};

module.exports = Bullet;