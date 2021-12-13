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

// TYPES

type Bit = "0" | "1";
type Byte = Bit[];

const getTranformedInput = () => {
  const temp: Bit[][] = new Array(input[0].length).fill([]);

  input.forEach((value: string) => {
    const byte: Byte = value.split("") as Byte;

    byte.forEach((bit, i) => {
      if (!temp[i].length) {
        temp[i] = [bit];
      } else {
        temp[i].push(bit);
      }
    });
  });

  return temp;
};

const getGamma = (input: Bit[][]) => {
  const amountOf1 = input.map((byte) => {
    return byte.filter((b) => b === "1").length;
  });

  const minLength = input[0].length / 2;

  const gammaArray = amountOf1.map((amount) => {
    return amount > minLength ? 1 : 0;
  });

  return gammaArray.join("");
};

const getEpsilon = (gamma: string) => {
  const gammaArray = gamma.toString().split("");
  const epsilonArray = gammaArray.map((val) => {
    return val === "1" ? "0" : "1";
  });

  return epsilonArray.join("");
};

const getResult = (gamma: string, epsilon: string) => {
  const numericGamma = parseInt(gamma, 2);
  const numericEpsilon = parseInt(epsilon, 2);

  return numericGamma * numericEpsilon;
};

const transformed = getTranformedInput();
const gamma = getGamma(transformed);
const epsilon = getEpsilon(gamma);
const result = getResult(gamma, epsilon);

console.log("gamma -> ", gamma);
console.log("epsilon -> ", epsilon);
console.log("result -> ", result);
