function CalculateSquareArea(side: number) {
  console.log(side * side);
}

function PrintSquareArea(side: number, text: string) {
  console.log(text + side * side);
}

// BASIC TYPESCRIPT
const squareSide: number = 8;
const text: string = "Square area is ";
const isPrintend: boolean = true;

if (isPrintend) {
    PrintSquareArea(squareSide, text);
} else {
    CalculateSquareArea(squareSide);
}