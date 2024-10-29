function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiplyArray(numbers) {
    return numbers.reduce((product, num) => product * num, 1);
}

function maxInArray(numbers) {
    return Math.max(...numbers);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function allEven(numbers) {
    return numbers.every(num => num % 2 === 0);
}

function extractValuesByKey(items, key) {
    return items.map(item => item[key]);
}

function containsString(strings, term) {
    return strings.includes(term);
}

function booleanToString(value) {
    return value ? 'true' : 'false';
}

function numberToString(num) {
    return num.toString();
}

function stringToNumber(numStr) {
    return parseInt(numStr, 10);
}

function joinStrings(strings) {
    return strings.join(' ');
}

function capitalizeNames(names) {
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
}

function sumOfSquares(nums) {
    return nums.reduce((sum, num) => sum + num * num, 0);
}

function power(base, exponent) {
    return Math.pow(base, exponent);
}

function longestWordLength(words) {
    return words.reduce((max, word) => Math.max(max, word.length), 0);
}

function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num.toString();
}

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

function squareNumbers(nums) {
    return nums.map(num => num * num);
}

function average(nums) {
    const total = nums.reduce((sum, num) => sum + num, 0);
    return total / nums.length;
}

function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
}

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

function productOfArray(nums) {
    return nums.reduce((product, num) => product * num, 1);
}

function filterOdds(nums) {
    return nums.filter(num => num % 2 === 0);
}

function sortStrings(strings) {
    return strings.sort();
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

function uniqueValues(arr) {
    return [...new Set(arr)];
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function anagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function countOccurrences(arr, value) {
    return arr.filter(item => item === value).length;
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
}

function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}