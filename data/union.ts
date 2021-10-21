const data:(number | string)[] = [1,2,3,4,5,6,"Hola"];

//Sumar numeros
//Concatenacion de cadenas

//Dato union Typescript

function merge(first: number | string, second: number | string) {
    if (typeof first === "number" && typeof second === "number") {
    console.log(first + second);
    }
    if (typeof first === "string" && typeof second === "string") {
    console.log(first.toString() + second.toString());
    }
    throw new Error("Bad arguments");
    
}

merge(1, 2);
