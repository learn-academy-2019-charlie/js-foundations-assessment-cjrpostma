// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".

let isDivisibleByThree = function(num) {return num % 3 === 0 ? `${num} is divisible by three` : `${num} is not divisible by three`}
console.log(isDivisibleByThree(6))

// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.

const helloMe = {
    first_name: 'chris',
    last_name: 'postma',
    height: 76,
    eyeColor: 'Green',
    describeMe(){
        return `${this.first_name} ${this.last_name} is ${this.height} inches tall and has ${this.eyeColor} eyes`
    }
}

// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

const groceryList = ['milk', 'cereal', 'banana', 'peanut butter', 'cheese']

groceryItems = (arr) => {
  let firstIndex = 0
  let middleIndex = Math.floor(arr.length / 2)
  let lastIndex = arr.length - 1
  let newArr = []
  newArr.push(arr[firstIndex])
  newArr.push(arr[middleIndex])
  newArr.push(arr[lastIndex])
  return newArr.join(', ')
}

console.log(groceryItems(groceryList))

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.

alphabetSoup = (str) => {
  let strArr = str.split('')
  let sortedStrArr = strArr.sort((a, b) => {
    return (a > b) ? 1 : (b > a) ? -1 : 0
  })
  return sortedStrArr
}
console.log(alphabetSoup('learn'))

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

// output should be: "9 ducks", etc

animalNums = (arr1, arr2) => {
  let newArr = []
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(`${arr1[i]} ${arr2[i]}`)
  }
  return newArr
}


console.log(animalNums(nums, nouns))

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.

let myArr = [1, 2, 3, 4, 5]

multipliesByFive = (arr) => {
  return arr.map(value => value * 5)
}

console.log(multipliesByFive(myArr));