let person = {
    name: 'Erdinc',
    age : 50
};

let person2 = [ "Erdinc", 30];
let cijferLijst = {
    Vak1: "wiskunde", 
    Cijfer1: 7,
    Vak2: "Nederlands",
    Cijfer2:10, 
    Vak3: "Engels",
    Cijfer3:9
};

let kleuren = [];

console.log (person.name);
console.log (person.age);
console.log (person2[0]);
console.log (person2[1]);
console.log (person2);
console.log (cijferLijst.Vak1, cijferLijst.Cijfer1);
console.log (cijferLijst.Vak2, cijferLijst.Cijfer2);
console.log (cijferLijst.Vak3, cijferLijst.Cijfer3);

kleuren [0] = "green";
kleuren [1] = "blue";
kleuren [2] = "red";


console.log(kleuren);
console.log(kleuren[0]);
console.log(kleuren[1]);
console.log(kleuren[2]);

kleuren.push('Yellow');
kleuren [4]= 5;
kleuren.push('{greeting: "hi, I am an object"}');
console.log(kleuren);

