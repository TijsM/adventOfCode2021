import fs from "fs";

// Assignment
// https://adventofcode.com/2021/day/2

// GET THE DATA
const input = fs.readFileSync("day2-dive/input.txt").toString().split("\n");

const testInput = fs
  .readFileSync("day2-dive/testInput.txt")
  .toString()
  .split("\n");

// TYPES

type Command = "forward" | "down" | "up";
type InputValue = {
  command: Command;
  amount: number;
};

// ALGORITHM

let horizontalPosition = 0;
let depth = 0;

input.forEach((value) => {
  const splitted = value.split(" ");
  const inputValue: InputValue = {
    command: splitted[0] as Command,
    amount: parseInt(splitted[1]),
  };

  switch (inputValue.command) {
    case "down": {
      depth = depth + inputValue.amount;
      break;
    }
    case "up": {
      depth = depth - inputValue.amount;
      break;
    }
    case "forward": {
      horizontalPosition = horizontalPosition + inputValue.amount;
      break;
    }
  }
});

console.log("depth: ", depth);
console.log("horizontalPosition: ", horizontalPosition);
console.log("result", depth * horizontalPosition);
