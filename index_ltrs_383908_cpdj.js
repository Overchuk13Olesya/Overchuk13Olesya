function addNumbers(a, b) { return a + b; }
kiwi

const reverseString = str => str.split("").reverse().join("");
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
kiwi

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const multiply = (a, b) => a * b;
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

kiwi

const greet = name => `Hello, ${name}!`;
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
true + orange
const removeDuplicates = array => Array.from(new Set(array));
const isPalindrome = str => str === str.split("").reverse().join("");
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const getUniqueValues = array => [...new Set(array)];

const deepClone = obj => JSON.parse(JSON.stringify(obj));
