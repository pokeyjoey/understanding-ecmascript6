function Planet(planet) {
  this.planet = planet;
}

var p = Planet.prototype;

p.sayPlanet = function() {
  console.log(this.planet);
}

var planet = new Planet('Mars');
planet.sayPlanet();


class PersonClass {

  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}

let person = new PersonClass('jeff');
person.sayName();

console.log(person instanceof PersonClass);
console.log(person instanceof Object);

console.log(typeof PersonClass);
console.log(typeof PersonClass.protoype.sayName);
