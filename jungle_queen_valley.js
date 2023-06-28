//From the Heart

// Lets start with something simple, we will make a function to convert a string to an all caps version

function makeUpper(str) {
  return str.toUpperCase();
}

//Another function that takes a string and reverses it so the letters are in the opposite order

function reverseStr(str) {
    return str.split('').reverse().join(''); 
}

// We will make a function that takes two strings and returns a new string which is created from joining the two strings together

function joinStr(str1, str2) {
    return str1 + str2;
}

// Writing a function to check if a string is a palindrome

function isPalindrome(str) {
    var revStr = str.split('').reverse().join('');
    if (str == revStr) {
        return true;
    }
    return false;
}

//Writing a function to check if a character is a vowel

function isVowel(char) {
  var vowels = "aeiou";

  if (vowels.includes(char)) {
    return true;
  }
  return false;
}

// Writing a function to count the number of vowels in a string

function numberOfVowels(string) {
  var count = 0
  for (var i = 0; i < string.length; i++) {
    if (isVowel(string[i])) {
      count++;
    }
  }
  return count;
}

// Writing a function to find the largest number in an array

function largestNum(arr) {
  var largest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// Writing a function to find the smallest number in an array

function smallestNum(arr) {
  var smallest = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

// Writing a function to remove all instances of a specific character in a string

function removeChar(str, char) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) != char) {
        newStr += str.charAt(i);
      } 
    }
    return newStr;
}

// Writing a function to capitalize the first letter of every word in a string

function capitalize(str) {
    var words = str.split(" ");
    var capitalizedWords = words.map(word => {
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    });
    return capitalizedWords.join(" ");
}

// Writing a function to check if a string is a valid email address

function validateEmail(str) {
    let regex = 
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(str).toLowerCase());
}

// Writing a function to check if a number is prime

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

// Writing a function that takes in an array and returns an array with all duplicate elements removed

function removeDuplicates(arr) {
  arr = arr.filter((v,i) => arr.indexOf(v) === i); 
  return arr;
}

// Writing a function to calculate the sum of an array of numbers

function sumOfArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Writing a function to calculate the factorial of a number

function factorial(num) {
  var product = 1;
  for (var i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
}

// Writing a function to check if a number is even

function isEven(num) {
  return num % 2 == 0;
}

// Writing a function to check if a number is odd

function isOdd(num) {
  return num % 2 != 0;
}

// Writing a function to check if a number is divisible by another

function isDivisible(num1, num2) {
  return num1 % num2 == 0;
}

// Writing a function to check if a number is a perfect square

function isPerfectSquare(num) {
    var sqrt = Math.sqrt(num);
    return sqrt - Math.floor(sqrt) == 0;
}

// Writing a function to generate a random number in a given range

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Writing a function to generate a random string of a given length

function randomString(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Writing a function to check if a string contains a given letter

function containsLetter(str, letter) {
  return str.includes(letter);
}

// Writing a function to find the index of a given letter in a string

function letterIndex(str, letter) {
  return str.indexOf(letter);
}

// Writing a function to check if an array contains a given value

function arrayContains(arr, val) {
  return arr.includes(val);
}

// Writing a function to find the index of a given value in an array

function findIndex(arr, val) {
  return arr.indexOf(val);
}

// Writing a function to replace all instances of a certain value in an array

function replaceValue(arr, oldVal, newVal) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == oldVal) {
      arr[i] = newVal;
    }
  }
  return arr;
}

// Writing a function to find the most common element in an array

function mostCommon(arr) {
  var mf = 1;
  var m = 0;
  var item;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[i] == arr[j])
        m++;
      if (mf < m) {
        mf = m;
        item = arr[i];
      }
    }
    m = 0;
  }
  return item;
}

// Writing a function to find the union of two arrays

function union(arr1, arr2) {
  var result = arr1.concat(arr2);
  result = Array.from(new Set(result))
  return result;
}

// Writing a function to find the intersection of two arrays

function intersection(arr1, arr2) {
  var union = arr1.concat(arr2);
  var result = union.filter(value => arr1.includes(value) && arr2.includes(value));
  return result;
}

// Writing a function to find the difference between two arrays

function difference(arr1, arr2) {
  var result = arr1.filter(x => !arr2.includes(x));
  return result;
}

// Writing a function to sort an array in descending order

function sortDescending(arr) {
  arr.sort((a, b) => b - a);
  return arr;
}

// Writing a function to check if an object has a given property

function hasProperty(obj, prop) {
  return obj.hasOwnProperty(prop);
}

// Writing a function to add a property to an object

function addProperty(obj, prop, val) {
  obj[prop] = val;
  return obj;
}

// Writing a function to remove a property from an object

function removeProperty(obj, prop) {
  delete obj[prop];
  return obj;
}

// Writing a function to convert a date to a string

function dateToString(date) {
  return date.toLocaleString();
}

// Writing a function to calculate the number of days between two dates

function daysBetween(date1, date2) {
  return (Math.ceil(date2 - date1) / 86400000);
}