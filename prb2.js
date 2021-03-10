const arr = [3, 2, 1] //define the input

const multiply = (lst, index) => { //define a function which takes an array and an index to ignore
  let prod = 1; //define a product value
  for (let i in lst) { //loop through indexes
    if (i === index) //if ignored index, don't multiply
      continue; //skip loop iteration
    prod *= lst[i] //increase product
  }
  return prod //return product
}

const noDivision = (lst) => {
  let output = [] //define an empty output array
  for (let i in lst) //loop through indexes
    output.push(multiply(lst, i)) //append the result of multiply()
  return output //return our new array
}

// ^^^^^ No division ^^^^^

// vvvvv Division vvvvv
const product = (lst) => {
  let prod = 1 
  for (let num of lst)
    prod *= num
  return prod
}

const division = (lst) => {
  let output = []
  let prod = product(lst)
  for (let num of lst)
    output.push(prod / num)
  return output
}

console.log(`Answer with division: ${division(arr)}`)
console.log(`Answer without division: ${noDivision(arr)}`)
