//Objet : deux manières de rajouter un attribut :
const objHello = {
  greeting: "hello",
};
objHello.name = "Toto"
objHello["age"] = 12;
console.log(objHello)

//Objet : comment boucle-t-on sur un objet ? 
Object.keys(objHello).forEach( (key) => {
  console.log(key, objHello[key]);
});

for (const attr in objHello) {
  console.log(`objHello.${attr} = ${objHello[attr]}`);
}

//Objet : rajouter deux méthode de 2 manières différentes : 
// la pain qu'on plit :)))


//Objet : à partir de l'objet suivant, renvoyez un tableau comportant uniquement les clés de l'objet :
const obj = {
    width : '10px',
    height : '10px',
    color : 'red'
}

console.log(Object.keys(obj).map( (key) => {
    return key
}));



//Class : écrivez une class (prenom, nom, age) et instanciez vous !
class Gardian{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
let groot = new Gardian("I am", "Groot", 1367)
// console.log(groot)

//Ecrivez une sous-classe (possible de réutiliser la classe ci dessus)
class Species extends Gardian {
constructor(firstName, lastName, age, race, power) {
  super(firstName, lastName, age);
  this.race = race;
  this.power = power
}
}
let toto = new Species('To', "2To", 2, "human", "big poo")
console.log(toto) // and go to https://www.youtube.com/watch?v=U3iOmhIIc_s


//Les 4 cas où la console renvoie undefined 
console.log(console.log("tu me renvoies undefined stp ?"))
console.log(undefined)
console.log(isNaN(0));
