"use strict";
{
    // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
    const sumArray = (inputNumber) => {
        return inputNumber.reduce((acc, current) => acc + current, 0);
    };
    const total = sumArray([1, 2, 3, 4, 5]);
    console.log(total);
    // 
}
