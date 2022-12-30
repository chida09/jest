import double from "./double";

const doubleSquare = (x: number): number => {
  return double(x)
}

const result = doubleSquare(2)
console.log('defaultExport', result)

export default doubleSquare
