function CalculateRectArea(base: number, height: number) {
  return base * height;
}

function printArea(result: number) {
    console.log("Result " + result);
}

let calculator: (b:number, h:number) => number;

calculator = CalculateRectArea;
//calculator = printArea;

console.log(calculator(2, 4));
