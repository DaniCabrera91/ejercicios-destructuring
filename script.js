// 1. Ejercicios destructuring

// Dado el siguiente objeto:
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];
console.log('ejercicio1:');
  // Extrae la empleada Ana con todos sus datos personales:

  const [Luis, Ana, Andrea] = empleados;
  console.log(Ana);
  console.log('ejercicio2:');
// Extrae el email del empleado Luis --> Luis@gmail.com   
  const {name, email} = Luis;
  console.log(email);
  

// Dado el siguiente objeto:

const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}

console.log('ejercicios 3,4,5,6:');
// Cambia el nombre de la propiedad “name” por “nombre
// Extrae el nombre del Pokemon
// Extrae el tipo de Pokemon que es
// Extrae el movimiento “Tackle”
const { 
    name: nombre,
    type,
    moves: [, attack2],
  } = pokemon;

console.log(nombre,type,attack2);



// 2. Ejercicios spread/rest
console.log('ejercicio7:');
// Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
};

const mergePokemons = {...pokemon, ...pikachu};
console.log(mergePokemons);

console.log('ejercicio8:');
// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
    function sumEveryOther(...sumEveryOther){
        let suma = 0
        for(let arg of sumEveryOther) {
            suma += arg
          }
        return (suma) 
    }    

  console.log( sumEveryOther(6, 8, 2, 3, 1)); //20
  console.log( sumEveryOther(11, 3, 12)); //26 

  console.log('ejercicio9:');  
// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
function addOnlyNums(...args){
    let sumaNumeros = 0
    for (let i=0; i< args.length; i++){
        if (typeof args[i] === "number"){
            sumaNumeros += args[i]
        }
    }
   return sumaNumeros 
}

console.log( addOnlyNums(1, 'perro', 2, 4)); //7

console.log('ejercicio10:');
// Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

function countTheArgs(...args){
    return args.length
}

console.log( countTheArgs('gato', 'perro')); //2
console.log( countTheArgs('gato', 'perro', 'pollo', 'oso')); //4


console.log('ejercicio11:');
// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

array1 = ["gato", "perro"]; //2
array2 = ["naranja", "rojo", "pollo", "oso"]; //4

function combineTwoArrays(array1, array2){
      let arrayConcat = [...array1,...array2]
      console.log(arrayConcat)
      }
    combineTwoArrays(array1,array2)


// 3. Extras


// Dado el siguiente objeto:

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};


console.log('ejercicio12:');
// Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana

// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;
const { today: maximaHoy } = HIGH_TEMPERATURES;
const { tomorrow: maximaManana } = HIGH_TEMPERATURES;
console.log(maximaHoy)
console.log(maximaManana)


console.log('ejercicio13:');
// Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

function onlyUniques(...arrayItem){ 
  let noRepeat = []
  for (let i = 0; i < arrayItem.length; i++){
    if (!noRepeat.includes(arrayItem[i])){
      noRepeat.push(arrayItem[i])
    }
  }
    console.log(noRepeat);
    return noRepeat
}

onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'); // ['gato', 'pollo', 'cerdo']

onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]



console.log('ejercicio14:');
// Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

function combineAllArrays(...arrays) {
    let newArray = [];
    for(let i = 0; i < arrays.length; i++) {
        newArray.push(...arrays[i]);
    }
    console.log(newArray);
  }

combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1]) // [3, 6, 7, 8, 2, 7, 3, 1]

combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]


console.log('ejercicio15:');
// Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

function sumAndSquare(...nums) {
  return nums.reduce((total, value) => (total += value ** 2), 0);
}

