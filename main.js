console.log('Hello World!')

alert('My name is Marcela')

let name = 'Marcela';
let lastName = 'Vilas Boas';

let first_num = 100;
let second_num = 11;
console.log('La suma es', first_num + second_num);

let nota_examen = 9.6;
if (nota_examen < 5) {
    alert(`Oh... Has suspendido el examen con ${nota_examen}`)
} else if (nota_examen >= 5 && nota_examen < 10) {
    alert(`Has aprobado el examen con ${nota_examen}`)
} else {
    alert(`¡Felicidades! ¡Has aprobado con un ${nota_examen}!`)
}


let sentence = 'Tinc un cotxe de color blau'
console.log(sentence);
console.log(sentence.replace('blau', 'verd'));

let newSentence = sentence.split('');

console.log(sentence.split('o').join('u'));

let objects = ['taula', 'cadira', 'ordinador', 'libreta'];

for (let i = 0; i < objects.length; i++) {
    console.log(`L'object ${objects[i]} està a la posició ${i}`);
};

function calculadora(operador, valor1, valor2) {
    let res = null
    if (operador == 'suma') {
        res = valor1 + valor2
        console.log(`La suma es ${res}`)
    } else if (operador == 'resta') {
        res = valor1 - valor2
        console.log(`La resta es ${res}`)
    } else if (operador == 'multiplicacio') {
        res = valor1 * valor2
        console.log(`La multiplicació es ${res}`)
    }
}

calculadora('suma', 1, 6)
calculadora('resta', 5, 3)
calculadora('multiplicacio', 9, 3)

