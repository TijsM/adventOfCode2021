import { Console } from "console";
import fs, { cp } from "fs";

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

const orderOfNumbers: string[] = testInput[0].split(",");
let calledIndex = 3;

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

const validateBoards = (boards: Board[], numbers: string[]) => {
  let winningBoard: Board | undefined = undefined;

  while (!winningBoard) {
    boards.forEach((board) => {
      const boardWon = checkIfBoardWon(board, numbers.slice(0, calledIndex));
      if (boardWon) {
        winningBoard = boardWon;
      }
    });
  }

  console.log(winningBoard);
};

const checkIfBoardWon = (board: Board, numbers: string[]) => {
  const rowDone = checkRow(board, numbers);
  const columnDone = checkColumn(board, numbers);

  if (rowDone || columnDone) {
    return board;
  } else {
    calledIndex++;
  }
};

const checkRow = (board: Board, numbers: string[]) => {
  let isWon = false;

  board.forEach((row) => {
    const markedNumbers = row.filter((val) => {
      return numbers.includes(val);
    });

    isWon = markedNumbers.length === row[0].length;
  });

  return isWon;
};

const checkColumn = (board: Board, numbers: string[]) => {
  return false;
};

const boards = getBoards();
validateBoards(boards, orderOfNumbers);
