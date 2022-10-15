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