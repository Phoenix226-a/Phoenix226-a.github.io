const random = (from, to) => Math.floor(Math.random() * (to - from + 1)) + from;

const matrix = (text, id, timer = 100, distance = 10, interval = 10, func = () => {}) => {
    const element = document.getElementById(id);
    let i = 0;

    if (text == "") {
        text = element.innerHTML;
    }

    let final = element.innerHTML;

    const iter = () => {
        result = ""
        i ++;

        for (let x = 1; x <= text.length; x ++) {
            result += i >= timer - distance + x * distance ? text[x - 1] : (i >= x * distance ? String.fromCharCode(random(33, 126)) : "");
        }

        element.innerHTML = result

        if (i > timer - distance + text.length * distance) {
            clearInterval(intervalId);
            element.innerHTML = final
            func(id)
        }
    }

    let intervalId;

    intervalId = setInterval(iter, interval, () => {});
};

matrix("I'm <b>Cedric</b>, an aspiring website designer and programmer.", "intro", 10, 5, 5)