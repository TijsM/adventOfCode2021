import { Console } from "console";
import fs from "fs";

// Assignment
// https://adventofcode.com/2021/day/4

// GET THE DATA
const realInput = fs
  .readFileSync("day4-giantSquid/input.txt")
  .toString()
  .split("\n");

const testInput = fs
  .readFileSync("day4-giantSquid/testInput.txt")
  .toString()
  .split("\n");

const input = testInput;

// TYPES

type Board = string[][];

// CODE

const orderOfNumbers: String[] = testInput[0].split(",");

const getBoards = () => {
  const stringBoards: string[][] = [];
  let currentIndex = 0;
  testInput.slice(2, testInput.length - 1).forEach((row) => {
    if (row === "") {
      currentIndex++;
    } else {
      if (!stringBoards[currentIndex]) {
        stringBoards[currentIndex] = [row];
      } else {
        stringBoards[currentIndex].push(row);
      }
    }
  });

  const boards: Board[] = stringBoards.map((board) => {
    return board.map((row) => {
      return row.split(" ").filter((val) => val !== "");
    });
  });

  return boards;
};

const boards = getBoards();
console.log(boards);
