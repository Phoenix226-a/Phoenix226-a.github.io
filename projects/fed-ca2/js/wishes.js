// This is for cleaner code (e.g. no undeclared variables)
"use strict";


// Generate dropdown
let schools = {
    "ABE": "School of Architecture & the Built Environment (ABE)",
    "SB": "School of Business (SB)",
    "CLS": "School of Chemical & Life Sciences (CLS)",
    "SoC": "School of Computing (SoC)",
    "EEE": "School of Electrical & Electronic Engineering (EEE)",
    "LSC": "School of Life Skills & Communication (LSC)",
    "MAD": "Media, Arts & Design School (MAD)",
    "MAE": "School of Mechanical & Aeronautical Engineering (MAE)",
    "MS": "School of Mathematics & Science (MS)",
    "SMA": "Singapore Maritime Academy (SMA)"
}

for (let school in schools) {
    document.getElementById("school").innerHTML += (`<option value="${school}">${schools[school]}</option>\n`);
}

// Is from SP?
let fromSP = ""

function isFromSP() {
    fromSP = "Yes"
    document.getElementById("school-toggle").style.display = "block";
}

function isNotFromSP() {
    fromSP = "No"
    document.getElementById("school-toggle").style.display = "none";
}

// Emoji picker
function randomEmoji() {
    var emojiUrl = 'https://raw.githubusercontent.com/muan/unicode-emoji-json/main/data-ordered-emoji.json';
    $.getJSON(emojiUrl, function(data) {
        let emoji = data[randInt(0, data.length - 1)];
        document.getElementById("toggle-emoji-button").textContent = emoji + " Toggle emoji picker...";
    });
}

randomEmoji();

let toggle = false;
function toggleEmojiPicker() {
    if (toggle) {
        document.querySelector("emoji-picker").style.display = "none";
        toggle = false;
        randomEmoji();
    } else {
        document.querySelector("emoji-picker").style.display = "block";
        toggle = true;
        randomEmoji();
    }
}

// Listen for "emoji-click" events
document.querySelector('emoji-picker')
  .addEventListener('emoji-click', event => {
    // Add emoji to message
    document.getElementById("message").value += event.detail.unicode;
});

// Submit
function submit() {
    let name = document.getElementById("name").value;
    let school = document.getElementById("school").value;
    let message = document.getElementById("message").value;
    let privacy = document.getElementById("privacy").checked;

    let missing = false;
    // Highlight missing fields
    let missingList = [];
    let filledList = [];
    if (fromSP == false) {
        missing = true;
        missingList.push("fromSP-label");
    } else {
        filledList.push("fromSP-label");
    }
    if (fromSP == "Yes" && school == "Select an option...") {
        missing = true;
        missingList.push("school-label");
    } else {
        filledList.push("school-label");
    }
    if (message == "") {
        missing = true;
        missingList.push("message-label");
    } else {
        filledList.push("message-label");
    }
    if (!privacy) {
        missing = true;
        missingList.push("privacy-label");
    } else {
        filledList.push("privacy-label");
    }

    for (let i in missingList) {
        document.getElementById(missingList[i]).style.backgroundColor = "var(--main-transparent-2)";
        document.getElementById(missingList[i]).style.textShadow = "0 0 10px white";
    }

    for (let i in filledList) {
        document.getElementById(filledList[i]).style.backgroundColor = "transparent";
        document.getElementById(filledList[i]).style.textShadow = "transparent";
    }

    // Show fields-missing or Submission screen
    if (missing) {

        // Show fields-missing
        document.getElementById("fields-missing").style.display = "block";

    } else {

        // Submission screen
        document.getElementById("fields-missing").style.display = "none";
        document.getElementById("form").style.display = "none";
        document.getElementById("form-submitted").style.display = "block";

        // Name
        if (name == "") {
            document.getElementById("wish-name").innerHTML = "From: <i>Anonymous</i>";
        } else {
            document.getElementById("wish-name").innerHTML = "From: " + name;
        }

        // School and Decorate Card
        if (fromSP == "Yes") {
            document.getElementById("wish-school").style.display = "block";
            document.getElementById("wish-school").innerHTML = schools[school];
            
            // Decorate Card
            document.getElementById("wish-card").style.backgroundImage = `linear-gradient(170deg, white, ${colors[school] + 50}`;
        } else {
            document.getElementById("wish-school").style.display = "none";
        }

        // Message
        document.getElementById("wish-message").innerHTML = message;

    }
}

function reset() {
    document.getElementById("form").style.display = "block";
    document.getElementById("form-submitted").style.display = "none";
    document.getElementById("message").value = "";
    document.querySelector("emoji-picker").style.display = "none";
    randomEmoji();
}

function resetform() {
    document.getElementById("name").value = "";
    document.getElementById("fromSP").checked = false;
    document.getElementById("fromSP1").checked = false;
    document.getElementById("school-toggle").style.display = "none";
    document.getElementById("school").value = "Select an option...";
    document.getElementById("message").value = "";
    document.querySelector("emoji-picker").style.display = "none";
    document.getElementById("privacy").checked = false;
    randomEmoji();
}