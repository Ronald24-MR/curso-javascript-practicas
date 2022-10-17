/*NOTA: Todos estos ejercicios se encuentran en un link de platzi con retos de arrays:
https://jshero.platzi.com/challenges
*/

// combina dos arrays de numeros en uno solo

// forma basica
const numerosPares = [2,4,6,8]
const numerosImpares = [1,3,5,7]

const arraysCombinados = numerosPares.concat(numerosImpares)
arraysCombinados.sort() //opcional
console.log(arraysCombinados)

// otra forma y mas profesional:
function solution(arrayA, arrayB) {
	const primerArray = arrayA
	const segundoArray = arrayB

	const arraysCombinados = primerArray.concat(segundoArray)
	return arraysCombinados
}; 

console.log(solution([1, 2, 3], [4, 5, 6]))

// Transforma un array de arrays en uno de un solo nivel

function solution(array){
    return array.flat();
}; 

console.log(solution([
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
]))


const matriz = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]

const resultado = matriz.flat()
console.log(resultado)


// Multiplica todos los elementos por dos
const solutions = function(array){
	const multiplicados = array.map(item => item*2)
	return multiplicados
}

console.log(solutions([2,4,5,6]))

// Transforma un Array de objetos a un Array de strings
const arrayString = function (array){
	const nombres = []
	array.map(item => item = nombres.push(item.name))
	return nombres
}

console.log(arrayString([
	{
	  name: 'Nicolas',
	  lastName: 'Molina',
	  age: 28
	},
	{
	  name: 'Valentina',
	  lastName: 'Molina',
	  age: 19
	}
]))

// Calcula y agrega una nueva propiedad en un Array
const nuevaPropiedad = function (array){
	const nuevoObjeto = array.map(item => {
		return {
			...item,
			taxes: Math.trunc(item.price * 0.19) 
		}
	})
	return nuevoObjeto
}

console.log(nuevaPropiedad([
	{
	  name: "Product 1",
	  price: 1000,
	  stock: 10
	},
	{
	  name: "Product 2",
	  price: 2000,
	  stock: 20
	}
]))


// Retorna solo palabras de 4 letras y más.
const letras = function (array){
	return array.filter(letra => letra.length >= 4)
}

console.log(letras(["amor","sol","piedra","dia"]))

// Filtra las compras que cumplan con las condiciones.
const condicion = function (array){
	return array.filter(item => {
		if(item.total >= 100 && item.delivered === true){
			return array
		}
	})
}

console.log(condicion([
	{
	  customerName: "Nicolas",
	  total: 100,
	  delivered: true,
	},
	{
	  customerName: "Zulema",
	  total: 120,
	  delivered: false,
	}
]))

// Busca dentro de un string y descubre si ¿Tiene la clave?
const coincidencia = function(word, query){
	if(word.toLowerCase().includes(query.toLowerCase())){
		return true
	}else{
		return false
	}	
}

console.log(coincidencia("Ana lava la tina", "ana"));
console.log(coincidencia("Santiago", "tiago"));
console.log(coincidencia("Nicolas", "ana"));


// Crea un buscador que retorne palabras de acuerdo parámetro de búsqueda
const buscador = function(words, query){
	const palabras = words.filter(item => item.includes(query))
	if(palabras){
		return palabras
	}
}

console.log(buscador(["ana", "santi", "nico", "anastasia"], "an"));
console.log(buscador(["ana", "santi", "nico", "anastasia"], "xyz"));

// Calcula la suma total de los elementos
const sumaElementos = function(numbers){
	const suma = numbers.reduce((item1, item2) => item1 + item2,0 )
	return suma
}

console.log(sumaElementos([1, 1, 1]));
console.log(sumaElementos([2, 4, 8])); 

// Calcular la suma de todas las compras entre objetos
const compras = function(orders){
	return orders.map((item) => item.total).reduce((count, item) => count + item, 0)
}

console.log(compras([
	{
	  customerName: "Nicolas",
	  total: 100,
	  delivered: true,
	},
	{
	  customerName: "Zulema",
	  total: 120,
	  delivered: false,
	}
]))

// Retornar si al menos alguno de los números es par
const par = function(numbers){
	return numbers.some(item => item%2==0)
}

console.log(par([1, 3, 5, 7, 10, 11]));
console.log(par([1, 3, 5]));

// Retorna un booleano si todos los elementos son pares.
const booleano = function(numbers){
	return numbers.every(item => item % 2 == 0)
}

console.log(booleano([2, 4, 6, 8, 10]));
console.log(booleano([1, 3, 5, 7, 10, 11]));
console.log(booleano([1, 3, 5]));

// Resuelve si dentro de una lista de cartas tienes el AS
const AS = function(cards){
	const cartas = cards.find(item => item === "AS")
	return cartas || false
}

console.log(AS(['diamonds', 'hearts', 'spades', 'AS']));
console.log(AS(['diamonds', 'hearts', 'spades']));

// Retorna la posición de una llave dentro de una lista
const clave = function(words){
	const myKey = words.findIndex(item => item === "myKey")
	return myKey !== -1 ? myKey : false
}

console.log(clave(["diamonds", "myKey", "spades", "AS"]));
console.log(clave(["diamonds", "hearts", "spades"]));
console.log(clave(["myKey", "hearts", "spades"]));

// Transforma un string y sepáralo por comas, como en un CSV
const separador  = function(words){
	return words.join(",")
}

console.log(separador(["amor", "sol", "piedra", "día"]));
console.log(separador(["diamonds", "hearts", "spades"]));

// Construye una URL con base a un string
const url = function(title){
	return title.split(' ').join('-').toLowerCase()
}

console.log(url("La forma de correr Python"));
console.log(url("La API para nunca parar de aprender"));
console.log(url("Curso de arrays"));