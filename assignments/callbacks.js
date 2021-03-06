// Create a callback function and invoke the function to test your work.
// You have been provided an example of a problem and a solution to see how this works with our items array.
// Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

////////////////////////////////////////////////////////////////

console.log('CALLBACKS CHALLENGE 1 👇');

function firstItem(arr, cb) {
  // firstItem passes the first iteam of the array into the callback.
  cb(arr[0]);
}

firstItem(items, (first) => {
  console.log(first)
});

////////////////////////////////////////////////////////////////

console.log('CALLBACKS CHALLENGE 2 👇');

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

getLength(items, (length) => {
  console.log(length)
});

////////////////////////////////////////////////////////////////

console.log('CALLBACKS CHALLENGE 3 👇');

function lastItem(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1]);
}

lastItem(items, (last) => {
  console.log(last)
});

////////////////////////////////////////////////////////////////

console.log('CALLBACKS CHALLENGE 4 👇');

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
}

sumNums(13, 10, (sum) => {
  console.log(sum)
});

////////////////////////////////////////////////////////////////

console.log('CALLBACKS CHALLENGE 5 👇');

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y);
}

multiplyNums(7, 7, (mult) => {
  console.log(mult)
});

////////////////////////////////////////////////////////////////

console.log('CALLBACKS CHALLENGE 6 👇');

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if(list.includes(item)){
    return cb(true);
  }
  else return cb(false);
};

contains("Notebook", items, function(word) {
  console.log(word);
});

////////////////////////////////////////////////////////////////

/* STRETCH PROBLEM */

const duplicates = ['Orlando','Gabe','Maxime','Louis','Gabe'];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  cb(array.filter(function(item, index) {
    return array.indexOf(item) == index;
  }))
}

removeDuplicates(duplicates, function(duplicates) {
  console.log(duplicates);
});

////////////////////////////////////////////////////////////////
