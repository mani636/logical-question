'use strict';

// 11.	You are given a list of numbers. Write a program that finds the second smallest number in the list and displays the result on a web page.

// Given input:10, 5, 20, 3, 8, 15
// Expected output:5

const array1 = [10, 5, 20, 3, 8, 15];

const getSmallestNumber = (arr) => {
  let smallestNumber = arr[0];
  let secondSmallestNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (smallestNumber > arr[i]) {
      secondSmallestNumber = smallestNumber;
      smallestNumber = arr[i];
    }
  }
  console.log(secondSmallestNumber);
};

getSmallestNumber(array1);

// 12.	You are given a list of words. Write a program that sorts the words in alphabetical order and displays the result on a web page.

// Given input:g,h,r,n,d,d
// Expected output:d,d,g,h,n,r

const array2 = ['g', 'h', 'r', 'n', 'd', 'd'];
array2.sort();
console.log(array2);

// 13.	You are given two arrays of numbers. Write a program that finds the common elements between the two arrays and displays the result on a web page.

// Given input:[1, 2, 3, 4, 5], [3, 4, 5, 6, 7]
// Expected Output:3,4,5

const array3 = [1, 2, 3, 4, 5];
const array4 = [3, 4, 5, 6, 7];

const findCommonElement = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        console.log(arr1[i], arr2[j]);
      }
    }
  }
};

findCommonElement(array3, array4);

// 14.	You are given a sentence. Write a program that capitalizes the first letter of each word in the sentence and displays the result on a web page.

// Given input:this is a sample sentence
// Expected output:This Is A Sample Sentence

const upperCase = (str) => {
  let array5 = str.split(' ');
  let newArray = [];
  for (let i = 0; i < array5.length; i++) {
    newArray.push(array5[i].charAt(0).toUpperCase() + array5[i].slice(1));
  }
  return newArray.join(' ');
};

console.log(upperCase('this is a sample sentence'));

// 15.	You are given an array of strings. Write a program that finds the longest string in the array and displays the result on a web page.

// Given input:apple, banana, orange, pear, grapefruit
// Expected output:grapefruit

const array6 = ['apple', 'banana', 'orange', 'pear', 'grapefruit'];

const longestStrInArray = (arr) => {
  let maxStr = arr[0].length;
  let ans = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let maxi = arr[i].length;
    if (maxi > maxStr) {
      ans = arr[i];
      maxStr = maxi;
    }
  }
  return ans;
};

console.log(longestStrInArray(array6));

// 16.	You are given a list of names. Write a program that sorts the names in reverse alphabetical order and displays the result on a web page.

// Given input:Coimbatore,Skill,Safari,Experience.
// Expected Output:Skill,Safari, Experience,Coimbatore.

const array7 = ['Coimbatore', 'Skill', 'Safari', 'Experience'];
array7.sort();
console.log(array7.reverse());

// 17.	You are given a string. Write a program that removes all whitespace characters from the string and displays the result on a web page.

// Given input:  Hello World  !
// Expected output:HelloWorld!

const str = 'Hello World';
const removeWhiteSpaceStr = str.split(' ').join('');
console.log(removeWhiteSpaceStr);

// 18.	You are given a list of numbers. Write a program that finds the sum of the squares of the numbers in the list and displays the result on a web page.

// Given input:  1, 2, 3, 4, 5
// Expected output:55
const numbers = [1, 2, 3, 4, 5];
function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n.length; i++) {
    sum += i * i;
  }
  return sum;
}

console.log(summation(numbers));
// 19.	You are given a list of strings. Write a program that concatenates all the strings in the list together and displays the result on a web page.

// Given input:  "Hello", "world", "!", "This", "is", "a", "concatenation", "example"
// Expected output:Hello world!Thisisaconcatenationexample

const array9 = [
  'Hello',
  'world',
  '!',
  'This',
  'is',
  'a',
  'concatenation',
  'example',
];

const result = ''.concat(...array9);
console.log(result);

// 20.	You are given a sentence. Write a program that finds the most common word in the sentence and displays the result on a web page.

// Given input:  The quick brown fox jumps over the lazy dog.
// Expected output:the
let str10 = 'The quick brown fox jumps over the lazy dog';

function findMostRepeatedWord(str) {
  let words = str.match(/\w+/g);
  let occurances = {};

  for (let word of words) {
    if (occurances[word]) {
      occurances[word]++;
    } else {
      occurances[word] = 1;
    }
  }

  let max = 0;
  let mostRepeatedWord = '';

  for (let word of words) {
    if (occurances[word] > max) {
      max = occurances[word];
      mostRepeatedWord = word;
    }
  }

  return mostRepeatedWord;
}

console.log(findMostRepeatedWord(str10));
