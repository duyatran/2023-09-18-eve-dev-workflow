// Problem: Write a JS program that takes in command-line arguments
// and print out their sum.
// We should skip any non-integer input (i.e., only sum up integers)

// ==> Input: command-line arguments
// Output: sum of arguments that are integers
// Processing

// Let's simply print out the command line arguments first
// [
//   '/usr/bin/node',
//   '/home/dtran/workspace/lhl-notes/2023-09-18-eve-dev-workflow/practice.js',
//   '23',
//   '43',
//   '324',
//   'abc'
// ]
// console.log(process.argv);

// Getting elements from the 3rd one until the end
const arguments = process.argv.slice(2);
// arguments: ['23', '43', '324', 'abc']

// Print them out to validate
// console.log(arguments);

let sum = 0;
for (const arg of arguments) {
  // add number to sum if it is an integer
  // console.log('outside of if clause:', arg);
  let number = Number(arg);

  if (Number.isInteger(number) === true) {
    // console.log('in if clause:', arg);
    sum = sum + number;
  }
  // console.log('sum in if clause:', sum);

}

console.log(sum);
