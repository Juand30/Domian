
let pronoun = ['the','our'];
const random = pronoun[Math.floor(Math.random() * pronoun.length)];

let adj = ['great', 'big' ];
const random2 = pronoun[Math.floor(Math.random() * adj.length)];

let noun = ['jogger','racoon'];
const random3 = noun[Math.floor(Math.random() * noun.length)];

let com = ['.com', '.es'];
const random4 = com[Math.floor(Math.random() * com.length)];

console.log(random+random2+random3+random4);

// bucles for anidados, 4 bucles unop dentro de otro