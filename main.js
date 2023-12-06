function Player(name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
}

Player.prototype.gainXp = function (xp) {
  this.points += xp;
  if (this.points >= 10) {
    this.lvl += 1;
    this.points -= 10;
  }
};

Player.prototype.describe = function () {
  return `${this.name} is level ${this.lvl} with ${this.points} points`;
};

const bob = new Player("Bob");
bob.gainXp(5);
bob.gainXp(10);
console.log(bob.describe());
