// 'use strict'

/* Constants n variables */

// const four = 4
/* const FOUR_NUMBER = 4

console.log('Hello "JS"!')
console.log("Hello 'JS'! - 2")
console.log("Hello 'JS'! -" + " 3")
console.log(`Hello 'JS'! - ${FOUR_NUMBER}`) */

/* var x = 100
x = '100'

if (true) {
  var x = 911
  // x = 911
}

console.log(`x = ${x}`) */

/* let x = 100
x = '100'
// let x = 911

if (true) {
  let x = 911
  console.log(`x = ${x}`)
}

console.log(`x = ${x}`) */


/* Embedded types */

/* x = 100
// let x = 100
if (true) {
  let x = 911
  console.log(`x = ${x}`)
}
console.log(`x = ${x}`) */

// number, string, boolean, undefined, null, bigint
// object

// console.log(y)

// const y
// let y

// console.log(y)
// console.log(y + 1)

// console.log(3 + 1 == 3 + 1)
// console.log(3 + 1 == 4)
// console.log(3 + 1 == '4')
// console.log(3 + 1 === '4')
// console.log(3 + 1 === 4)
// console.log(y + 1 == y + 1)
// console.log(y + 1 === y + 1)
// console.log(Number.isNaN(y + 1) === Number.isNaN(y + 1)) // true === true
// console.log(100 / 0)
// console.log(100 / -0)
// const z = null
// const z = undefined


/* Functions */

// function foo () {}
// foo()

/* function foo2 (a, b) {
  console.log(a + b)
}
foo2(1, 5) */

/* function foo2 (a, b) {
  console.log(a + b)
}
foo2('dfd', 'dsvf') */

/* function foo2 (a, b) {
  console.log(a + b)
}
foo2() */

/* function foo3 () {
  console.log(arguments[0] + arguments[1])
}
foo3(2, 7) */

/* function foo3 () {
  console.log(arguments[0] + arguments[1])
}
foo3(2, 7) */

/* const foo3 = function () {
  console.log(arguments[0] + arguments[1])
}
foo3(2, 7) */

/* const foo4 = (a, b) => {
  console.log(a + b)
}
foo4(2, 7) */

function fib (n) {
  if (n < 2) {
    return n
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}

/* for (let index = 0; index < 13; index++) {
  console.log(fib(index))
} */

// Task
// https://en.wikipedia.org/wiki/Factorial

/* function factorial (n) {
  let result = n
  for (let i = 1; i < n; i++) {
    // console.log(`1) i = ${i}, n = ${result}`)
    result *= i
    // console.log(`2) i = ${i}, n = ${result}\n`)
  }
  return result
}

function factorialRecursion (n) {
  if (n <= 0) {
    return 1
  } else {
    return (n * factorialRecursion(n - 1))
  }
}

console.log(factorialRecursion(5))

console.log(factorial(5)) */

/* function foo (action) {
  // console.log(action)
  if (action) {
    console.log('Performing an action: ')
    action()
  }
}

foo(() => console.log(`2 * 2 = ${2 * 2}`))
foo(() => console.log(`3 * 3 = ${3 * 3}`))
foo() */

/* function intSort (integers) {
  let isSorted = false
  do {
    isSorted = true
    for (let i = 0; i < integers.length - 1; i++) {
      const currentElement = integers[i]
      const nextElement = integers[i + 1]
      if (currentElement - nextElement < 0) {
        const temporaryElement = integers[i]
        integers[i] = integers[i + 1]
        integers[i + 1] = temporaryElement
        isSorted = false
      }
    }
  } while (!isSorted)
}

const integers = [1, -9, 0, 7, 200, 201, 107, -7, 0]
intSort(integers)
console.log(integers) */

/* function uSort (elements, comparator) {
  let isSorted = false
  do {
    isSorted = true
    for (let i = 0; i < elements.length - 1; i++) {
      const currentElement = elements[i]
      const nextElement = elements[i + 1]
      if (comparator(currentElement, nextElement) < 0) {
        const temporaryElement = elements[i]
        elements[i] = elements[i + 1]
        elements[i + 1] = temporaryElement
        isSorted = false
      }
    }
  } while (!isSorted)
} */

// const integers = [1, -9, 0, 7, 200, 201, 107, -7, 0]
/* function intComaratorDesc (a, b) {
  return a - b
} */
// uSort(integers, intComaratorDesc)
// uSort(integers, (a, b) => b - a)
// console.log(integers)

/* const strings = ['John', 'Bill', 'Yurii', 'Maria']
uSort(strings, (a, b) => b.localeCompare(a))
console.log(strings) */

/* const people = [
  {
    'name': 'John',
    'age': 30
  },
  {
    'name': 'Bill',
    'age': 35
  },
  {
    'name': 'Yurii',
    'age': 25
  },
  {
    'name': 'Maria',
    'age': 20
  }
] */

// uSort(people, (a, b) => b.name.localeCompare(a.name))
// uSort(people, (a, b) => b['name'].localeCompare(a['name']))
// uSort(people, (a, b) => a.age - b.age)
// console.log(people)

// streams

/* people.sort((a, b) => a.name.localeCompare(b.name))
  .filter(person => person.age > 21)
  .map(person => `${person.name} (${person.age} y.o.)`)
  .forEach(person => console.log(person)) */

/* const filteredPeople =
  people.sort((a, b) => a.name.localeCompare(b.name))
    .filter(person => person.age > 21)
const ageSum = filteredPeople.reduce((result, person) => result += person.age, 0)

console.log(ageSum / filteredPeople.length) */

// Some changes ...

/* OOP */

/* function regularFunction () {
  console.log('regularFunction')
  let x = 2 * 2
  return x
}

const result = regularFunction()
console.log(result) */

/* function ClassFunction () {
  this.name = 'Noname'
  this.demoMethod = () => {
    console.log(this.name)
  }
} */

/* function ClassFunction (nameString) {
  if (nameString) {
    this.name = nameString
  } else {
    this.name = 'Noname'
  }
  this.demoMethod = () => {
    console.log(this.name)
  }
} */

/* function ClassFunction (nameString) {
  if (!new.target) {
    return new ClassFunction(nameString)
  }
  if (nameString) {
    this.name = nameString
  } else {
    this.name = 'Noname'
  }
  this.demoMethod = () => {
    console.log(this.name)
  }
} */

// const result2 = new ClassFunction()
// const result2 = new ClassFunction('MyName')
/* const result2 = ClassFunction('MyName')
console.log(result2)
result2.demoMethod() */

// const x = Number(10)
// const y = new Number(20) // wrong!
// const y = Number(20)

// console.log(x)
// console.log(y)
/* console.log(typeof x, typeof y)
if (typeof x === 'number' && typeof y === 'number') {
  console.log(x + y)
} */

/* const o1 = {data: 'some data ...'}
// ...
o1['anotherData'] = '123'
o1.yetAnotherData = '456'
console.log(o1) */

/* const obj1 = {}
Object.defineProperty(obj1, "x", { value: 42, writable: false })
obj1.x = 9 // выдаст TypeError
console.log(obj1.x) */

/* const obj2 = { get x() { return 17; } }
obj2.x = 5; // выдаст TypeError
console.log(obj2.x) */

/* const fixed = {prop1: 9}
Object.preventExtensions(fixed)
fixed.newProp = "ohai" // выдаст TypeError */

/* let user = {
  name: "John",
  age: 30
}

let clone = Object.assign({password: 123456}, user)
let copy = user */

// copy.name = "Copy"
// clone.name = "Clone"

// console.log(user)
// console.log(clone)

// const arr = [{name: "John", age: 30}, {name: "Bill", age: 65}]
// const arr2 = [arr[0], arr[1]]
// const arr2 = [...arr]
// const arr2 = arr.map(element => Object.assign({}, element))
// arr2[0].name = 'Tom'
// console.log(arr)

/* let user = {
  name: "John",
  money: 1000,
  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" || hint == "default" ? this.name : this.money;
  }
} */

// console.log(2 + 2)
// console.log(user + 2000)
// console.log(user + ' 2000')
// console.log(user)

/* alert(user);
console.log(user);
console.log(+user);
console.log(user + 500); */

/* const map = new Map()
map.set('John', 30)
map.set('Bill', 65)
console.log(map.has('John'))
console.log(map.has('Tom'))
console.log(map.get('John')) */
/* map.get(key)
map.has(key)
map.delete(key)
map.clear()
map.size */

/* const array = []
const set = new Set()
set.add('John')
set.add('Bill')
set.add('Tom')
set.add('John')
console.log(set) */
/* array.push('John')
array.push('Bill')
array.push('Tom')
array.push('John')
console.log(array) */

/* const sum = 7
 const numbers = [1, 8, 5, 3, 2, 7, 3, 2, 9, 0, -2, 9, 16, 14]
 const numberPairs = new Map()
 for (let i = 0; i < numbers.length; i++) {
   const currentNumber = numbers[i]
   let secondNumber
   for (let j = 0; j < numbers.length; j++) {
   if (i != j) {
     secondNumber = numbers [j]
     if ((currentNumber + secondNumber === sum)) {
       if (numberPairs.has(secondNumber)) {
         if (numberPairs.get(secondNumber) === currentNumber) {
           continue
         }
       }
       numberPairs.set(currentNumber, secondNumber)
     }
   }
 }
} 
numberPairs.forEach((value, key) => console.log(`${value} - ${key}`)) */

/* const sum = 7
const numbers = [1, 8, 5, 3, 2, 7, 3, 2, 9, 0, -2, 9, 16, 14]
const numberMap = new Map()
for (let i = 0; i < numbers.length; i++) {
  // в словарь элементов "число из массива - сколько раз встречается"
  // добавляем в качестве ключей все числа массива,
  // а в качестве значений:
  // 1. если пара с таким ключем отсутствует в словаре -- 1;
  // 2. если пара с таким ключом уже есть в словаре -- прошлое значение + 1;
  numberMap.set(numbers[i], numberMap.has(numbers[i]) ? numberMap.get(numbers[i]) + 1 : 1)
}
const numberPairs = new Map()
numberMap.forEach((value, number) => {
  // 1. numberMap.get(sum - number)
  // разность суммы и текущего числа должна встречаться в частотном словаре в качестве ключа
  // 2. &&
  // при этом не должно быть повторов, то есть:
  // 2.1 number < sum - number
  // текущее число меньше второго слагаемого (то есть разности суммы и текущего числа),
  // например, 5 не меньше 2, а 2 - меньше 5, и выбираем в результат только вторую комбинацию
  // ||
  // либо
  // 2.2 (number == sum - number) && (numberMap.get(number) > 1)
  // текущее число равно второму (разность суммы и текущего числа равна текущему числу),
  // &&
  // numberMap.get(number) > 1
  // при этом текущее число должно встречаться более 1 раза,
  // например, сумма = 8, и дважды или более встречается число 4,
  // так что 4 = 8 - 4
  if (numberMap.has(numberMap.get(sum - number)) && ((number > sum - number) || ((number === sum - number) && (numberMap.get(number) > 1)))) numberPairs.set(number, sum - number)
})
numberPairs.forEach((value, key) => console.log(`${value} - ${key}`)) */

/* console.log('start')
setTimeout(() => {
  console.log('done')
}, 0)
console.log('end') */

/* const token = setInterval(() => {
  console.log('tic')
}, 3000)
console.log('-')
const token2 = setInterval(() => {
  console.log('tak')
}, 2000)
console.log('-')
setTimeout(() => {
  clearInterval(token)
  clearInterval(token2)
}, 12000)
console.log('-') */

/* function asyncFun1 () {
  return fib(45)
} 
const result = asyncFun1()
const token = setInterval(() => {
  console.log('.')
}, 1000)
console.log(result)
clearInterval(token)
*/

/* let token
function asyncFun1 () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        token = setInterval(() => {
          console.log('.')
        }, 1000)
        resolve(fib(45))
      } catch (error) {
        reject(error)
      }
    }, 0)
  })
}

const promise = asyncFun1()
console.log('start')
promise.then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)
}).finally(() => {
  animation = false
  console.log('fin')
  clearInterval(token)
}) */
/* do {
  console.log('.')
  console.log(animation)
} while (animation) */

const fetch = require("node-fetch")
fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then((result) => console.log(result))
  .then((result) => result.json())
  .then((data) => console.log(data))
