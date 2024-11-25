// 1.Mostrar en consola la secuencia de Fibonacci:

/*Secuencia de Fibonacci: Es una sucesión Matemática en la que cada número
es la suma de dos anteriores, comenzando generalmente con 0 y 1
Formula: F(n)= F(n-1)+F(n-2)  */

//a. Entre los números 0 y 1000
function fibonacci(){               //Se define la funcion vacia llamada fibonacci
    let result = [];                //Se crea un array vacio llamado result para almacenar la secuencia de numeros

    let a = 0;                    //Se define el primer numero de la secuencia
    let b = 1;                    //Se define el segundo numero de la secuencia  


    /*Se ejecuta el ciclo for generando la secuencia hasta el numero máximo de 1000*/
    for (let i=0; i<=1000; i++){     /*1.let i=0 vamos a iterar un arreglo de numeros;
                                      2.i<=1000 expresion en comparacion donde este ciclo
                                      se va a cumplir hasta <=1000;
                                      3. El proceso que se va a hacer es incremetar en una 
                                      unidad el operando, devuelve el valor antes de añadirle 1*/
        if (a <=1000) {             /*Ejecuta una sentencia evaluada como verdadera, si a es menor o igual a 1000,
                                      Se almacena en el arreglo result*/
            result.push(a);         //añade el elemento al final de la lista
        }
        [a, b] = [b, a+b];          //Actualiza simultáneamente a y b
    }
    return result;                  //Devuelve en array con la secuencia completa de numeros
} 

console.log(fibonacci(1000));      //Comprobación: llama a la función y muestra el resultado en la consola


//b. Numeros pares entre  0 y 1000
function fibonacciPares(){         //Se define la funcion vacia llamada fibonacciPares
    let result = [];                //Se crea un array vacio llamado result para almacenar la secuencia de numeros pares

    let a = 0;                    //Se define el primer numero de la secuencia
    let b = 1;                    //Se define el segundo numero de la secuencia  


    /*Se ejecuta el ciclo for generando la secuencia hasta el numero máximo de 1000*/
    for (let i=0; i<=1000; i++){       /*1.let i=0 vamos a iterar un arreglo de numeros;
                                       2.i<=1000 expresion en comparacion donde este ciclo
                                       se va a cumplir hasta <=1000;
                                       3. El proceso que se va a hacer es incremetar en una 
                                       unidad el operando, devuelve el valor antes de añadirle 1*/
        if (a % 2 ===0 && a <=1000) {  /*Ejecuta una sentencia evaluada como verdadera, si a divisible por 2(par)
                                        y si es menor o igual a 1000,
                                       Se almacena en el arreglo result*/
            result.push(a);         //añade el elemento al final de la lista
        }
        [a, b] = [b, a+b];          //Actualiza simultáneamente a y b
    }
    return result;                  //Devuelve en array con la secuencia completa de numeros pares
} 

console.log(fibonacciPares(1000));      //Comprobación: llama a la función y muestra los numeros Pares en consola


//c. Numeros pares entre  0 y 1000
function fibonacciImpares(){         //Se define la funcion vacia llamada fibonacciImpares
    let result = [];                //Se crea un array vacio llamado result para almacenar la secuencia de numeros impares

    let a = 0;                    //Se define el primer numero de la secuencia
    let b = 1;                    //Se define el segundo numero de la secuencia  


    /*Se ejecuta el ciclo for generando la secuencia hasta el numero máximo de 1000*/
    for (let i=0; i<=1000; i++){       /*1.let i=0 vamos a iterar un arreglo de numeros;
                                       2.i<=1000 expresion en comparacion donde este ciclo
                                       se va a cumplir hasta <=1000;
                                       3. El proceso que se va a hacer es incremetar en una 
                                       unidad el operando, devuelve el valor antes de añadirle 1*/
        if (a % 2 !==0 && a <=1000) {  /*Ejecuta una sentencia evaluada como verdadera, si a no divisible por 2(impar)
                                        y si es menor o igual a 1000,
                                       Se almacena en el arreglo result*/
            result.push(a);         //añade el elemento al final de la lista
        }
        [a, b] = [b, a+b];          //Actualiza simultáneamente a y b
    }
    return result;                  //Devuelve en array con la secuencia completa de numeros impares
} 

console.log(fibonacciImpares(1000));      //Comprobación: llama a la función fr los numeros impares en consola


//2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas. 

//Array llamado pokemon que contiene un string con cuatro nombres

let pokemon =
[
   'Pikachu',
   'Charmander',
   'Bulbasaur',
   'Squirtle'
];

/*Se usa el método map que crea un nuevo array  que convierte cada
elemento del array original a máyuscula*/
let pokemonMayusculas = pokemon.map(p => p.toUpperCase());

// Comprobación: Se muestra el nuevo array en consola
console.log(pokemonMayusculas);

//3. Del siguiente arreglo de objetos, retornar otro arreglo con los pokemon tipo 
//fuego. 

let pokemonArray = [
    { nombre: 'Pikachu', tipo: 'Electrico' },
    { nombre: 'Charmander', tipo: 'Fuego' },
    { nombre: 'Bulbasaur', tipo: 'Planta' },
    { nombre: 'Squirtle', tipo: 'Agua' },
    { nombre: 'Charmeleon', tipo: 'Fuego' },
    { nombre: 'Weedle', tipo: 'Bicho' },
    { nombre: 'Charizard', tipo: 'Fuego' }
];

// Se usa el método filter() para obtener solo los Pokémon de tipo fuego
let pokemontipoFuego = pokemonArray.filter(element =>{
    return element.tipo === "Fuego";

});

// Comprobación: Se muestra el nuevo array en consola
console.log("Pokemones de tipo fuego:", pokemontipoFuego);