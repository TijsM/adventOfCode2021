import fs from "fs";

// Assignment
// https://adventofcode.com/2021/day/1

// GET THE DATA
const input = fs
  .readFileSync("day1-sonarSweep/input.txt")
  .toString()
  .split("\n");

const testInput = fs
  .readFileSync("day1-sonarSweep/testInput.txt")
  .toString()
  .split("\n");

// ALGORITHM

let amountOfIncrements = 0;
input.forEach((value, i) => {
  if (i == 0) {
    return;
  }

  const current = parseInt(value, 10);
  const prev = parseInt(input[i - 1], 10);

  if (current > prev) {
    amountOfIncrements++;
  } else {
  }
});

console.log(amountOfIncrements);
