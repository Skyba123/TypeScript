function add(a: number, b: number): number {
    return a + b;
}


function subtract(a: number, b: number): number {
    return a - b;
}

function multiplyArray(numbers: number[]): number {
    return numbers.reduce((product, num) => product * num, 1);
}

function maxInArray(numbers: number[]): number {
    return Math.max(...numbers);
}

function reverseString(str: string): string {
    return str.split('').reverse().join('');
}


function isPrime(n: number): boolean {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function allEven(numbers: number[]): boolean {
    return numbers.every(num => num % 2 === 0);
}

function extractValuesByKey(items: Object[], key: string): string[] {
    return items.map(item => item[key]);
}

function containsString(strings: string[], term: string): boolean {
    return strings.includes(term);
}

function booleanToString(value: boolean): string {
    return value ? 'true' : 'false';
}

function numberToString(num: number): string {
    return num.toString();
}

function stringToNumber(numStr: string): number {
    return parseInt(numStr, 10);
}

function joinStrings(strings: string[]): string {
    return strings.join(' ');
}

function capitalizeNames(names: string[]): string[] {
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
}

function sumOfSquares(nums: number[]): number {
    return nums.reduce((sum, num) => sum + num * num, 0);
}

function power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
}

function longestWordLength(words: string[]): number {
    return words.reduce((max, word) => Math.max(max, word.length), 0);
}

function fizzBuzz(num: number): string {
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num.toString();
}

function factorial(n: number): number {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}


function squareNumbers(nums: number[]): number[] {
    return nums.map(num => num * num);
}

function average(nums: number[]): number {
    const total = nums.reduce((sum, num) => sum + num, 0);
    return total / nums.length;
}

function removeVowels(str: string): string {
    return str.replace(/[aeiou]/gi, '');
}


function isPalindrome(str: string): boolean {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

function productOfArray(nums: number[]): number {
    return nums.reduce((product, num) => product * num, 1);
}

function filterOdds(nums: number[]): number[] {
    return nums.filter(num => num % 2 === 0);
}

function sortStrings(strings: string[]): string[] {
    return strings.sort();
}

function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function countVowels(str: string): number {
    return (str.match(/[aeiou]/gi) || []).length;
}

function mergeArrays(arr1: any[], arr2: any[]): any[] {
    return [...arr1, ...arr2];
}

function uniqueValues(arr: any[]): any[] {
    return [...new Set(arr)];
}

function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function binarySearch(arr: number[], target: number): number {
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

function flattenArray(arr: any[]): any[] {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
}


function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b);
}

function anagram(str1: string, str2: string): boolean {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

function getRandomElement(arr: any[]): any {
    return arr[Math.floor(Math.random() * arr.length)];
}

function shuffleArray(arr: any[]): any[] {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function deepClone(obj: Object): Object {
    return JSON.parse(JSON.stringify(obj));
}


function countOccurrences(arr: any[], value: any): number {
    return arr.filter(item => item === value).length;
}

function hexToRgb(hex: string): number[] {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
}

function rgbToHex(r: number, g: number, b: number): string {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}