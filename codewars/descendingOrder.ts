/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

// `https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/typescript`;

const descendingOrder = (n: number): number => {
    // your code here
    let num = String(n) // convert number to string so as to use the split method of string
        .split("")
        .map((str) => +str) // convert array of strings to array of numbers
        .sort((a, b) => (a > b ? -1 : a < b ? 1 : 0)) // sort it
        .join(""); // convert array back to string

    // convert to number
    return +num;
};

descendingOrder(23945);
