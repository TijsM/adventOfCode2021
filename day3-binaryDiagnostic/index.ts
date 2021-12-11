import fs from "fs";

// Assignment
// https://adventofcode.com/2021/day/3

// -> Gamma rate
// -- -> most common bit in the corresponding position
// -- -> check the most used bit on position 1 of all the bytes

// -> Epsilon rate
// -- -> least common used bit in the corresponding position
// -- -> check the least used bit on position 1 of all the bytes
// -- -- -> invert the result of the gamma rate

// GET THE DATA
const input = fs
  .readFileSync("day3-binaryDiagnostic/input.txt")
  .toString()
  .split("\n");

const testInput = fs
  .readFileSync("day3-binaryDiagnostic/testInput.txt")
  .toString()
  .split("\n");

console.log(testInput);
