function error(message: string): never{
    throw new Error(message);
}

function fail() {
    return error("Something failed");
}

function infinityLoop(): never {
    while (true) {
        console.log("Hello");
    }
}