//ENUM TYPESCRIPT ==> objeto definido con un lengh definido

enum colors {
    red = "#ff0000",
    blue = "#0000ff",
    green = "#00ff00",
}

const preferences = {
    fontSize: 14,
    fontFamily: "Inter",
    color: colors.blue,
};

if (preferences.color === colors.red) {
    console.log(colors.red);
}
