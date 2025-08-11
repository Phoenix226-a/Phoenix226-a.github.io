// This is for cleaner code (e.g. no undeclared variables)
"use strict";

// Random Number Function
function randInt(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}


// School Colors
let colors = {
    "ABE": "#993300",
    "SB": "#E08D19",
    "CLS": "#D31145",
    "SoC": "#5B7F95",
    "EEE": "#22BCB9",
    "LSC": "#654EA3",
    "MAD": "#BEBE4D",
    "MAE": "#0096D7",
    "MS": "#B32017",
    "SMA": "#005596"
}

// Easter Egg 2
if (randInt(1, 1000) == 1) {
    let root = document.querySelector(':root');
    let color = ""

    switch (randInt(1, 10)) {
        case 1:
            color = colors.ABE;
            break;
        case 2:
            color = colors.SB;
            break;
        case 3:
            color = colors.CLS;
            break;
        case 4:
            color = colors.SoC;
            break;
        case 5:
            color = colors.EEE;
            break;
        case 6:
            color = colors.LSC;
            break;
        case 7:
            color = colors.MAD;
            break;
        case 8:
            color = colors.MAE;
            break;
        case 9:
            color = colors.MS;
            break;
        case 10:
            color = colors.SMA;
            break;
    }

    root.style.setProperty("--main", color);
    root.style.setProperty("--main-transparent", color + "A0");
    root.style.setProperty("--main-transparent-2", color + "50");
    root.style.setProperty("--main-transparent-3", color + "10");
    root.style.setProperty("--main-dark", "black");
}