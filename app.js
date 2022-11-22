
let pronoun = ['the','our'];
const random = pronoun[Math.floor(Math.random() * pronoun.length)];

let adj = ['great', 'big' ];
const random2 = pronoun[Math.floor(Math.random() * adj.length)];

let noun = ['jogger','racoon'];
const random3 = noun[Math.floor(Math.random() * noun.length)];

let com = ['.com', '.es'];
const random4 = com[Math.floor(Math.random() * com.length)];



for ( var i=0; i < pronoun.length; i++){
    for(var j = pronoun[i]; j <= adj [i]; j++){
        console.log (j+ noun[i]);
    } 
}

// bucles for anidados, 4 bucles unop dentro de otro