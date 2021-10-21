//literal TYPESCRIPT

type browser = "firefox" | "chrome";

function process(browser: browser) {
    console.log("Valid Browser");
}

type difficulty = 1 | 2 | 3;

function fight(difficulty: difficulty) {
    console.log("Fight!");
}
fight(3);
process("firefox");
