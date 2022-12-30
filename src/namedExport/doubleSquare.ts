import { double } from "./double";

export const doubleSquare = (x: number): number => {
  return double(x)
}

const result = doubleSquare(2)
console.log('namedExport', result)
