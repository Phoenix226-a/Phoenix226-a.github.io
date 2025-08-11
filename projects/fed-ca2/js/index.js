// This is for cleaner code (e.g. no undeclared variables)
"use strict";

// Generate history
let history = {
    1951: "Local businessmen discused an idea of a polytechnic.",
    1954: "Singapore Polytechnic was established by the passing of the Singapore Ordinance by the Legislative Council on 27 October.",
    1957: "Mr D J Williams was appointed as the first Principal.",
    1959: "Opening of Prince Edward Road campus by Prince Philip, the Duke of Edinburgh on 24 February.<br><br>Mr C I C Scollay was appointed Principal.",
    1960: "Singapore Polytechnic emblem and education mission adopted.<br><br><i>Berkhidmat Dengan Keahlian</i> (Malay for <i>To Serve With Skill</i>) is the Polytechnic’s educational mission.",
    1961: "First graduation ceremony on 26 August at Victoria Theatre.",
    1962: "Mr A R Edis was appointed Principal.",
    1965: "Professional diploma courses started to be replaced by degree courses.",
    1967: "First batch of degree graduates produced.",
    1969: "Polytechnic is restructured into <i>School of Industrial Technology</i> and <i>School of Nautical Studies</i>.",
    1971: "Nautical Studies, Civil Engineering and Building students housed in Princess Mary Barracks.<br><br>Present campus site at Dover Road was chosen as the permanent home of the Polytechnic.<br><br>By the end of 1971, Princess Mary Barracks at Dover Road was converted into Princess Mary Campus, SP's second campus.",
    1972: "Ayer Rajah Road campus completed and began functioning.",
    1973: "Mr V P W Ager was appointed Principal.",
    1976: "Polytechnic restructured into nine academic departments and divisions.",
    1979: "Dover Road Campus was officially opened by Prime Minister Lee Kuan Yew on 7 July.",
    1980: "Singapore Polytechnic (Amendment) Act passed in Parliament on 26 February, reconstituting the Board of Governors and reorganising student bodies.",
    1984: "All full-time Technician Diploma courses restructured and revised to cater for high technology needs.",
    1986: "Completion of Second Phase campus development programme which took five years.",
    1990: "New $3.3 million Sports Complex completed.<br><br>50,000 graduates milestone achieved!",
    1991: "Foreign language programme offered for the first time.<br><br>SP became the first poly to offer a professional Diploma in Accountancy.",
    1992: "Third Phase campus development project officially opened by Deputy Prime Minister Lee Hsien Loong.",
    1994: "SP became the first poly to introduce the Diploma in Optometry.<br><br>Official opening of Fourth Phase campus development project by Minister for Education Lee Yock Suan.",
    1996: "Mr Low Wong Fook took over as new Principal.",
    1997: "Virtual College launched, offering online courses including part-time programmes and various modules.",
    2000: "Singapore Maritime Academy was formed with the merger of the Polytechnic's Department of Maritime Technology & Transportation and the Maritime & Port Authority of Singapore's National Maritime Academy.<br><br>100,000 graduates milestone achieved!<br><br>Electronics & Communication Engineering Department merged with Electrical Engineering Department to form the Electrical & Electronic Engineering Department.",
    2003: "Re-branding of the Polytechnic initiated with a new Education Model of the Future, and with programmes to unleash creativity, innovation and enterprise, to create a unique SP experience for students and to make SP a great place to work.<br><br>Opening of fifth-phase campus expansion by Minister for Education RADM Teo Chee Hean.",
    2004: "Singapore Polytechnic turned 50. His Excellency, Mr S R Nathan, President of the Republic of Singapore, launched the yearlong celebrations on 13 February at the official opening of the new Convention Centre and Plaza.",
    2005: "Singapore Polytechnic (SP) buried a time capsule to signify the close of the year long celebrations and the opening of a new chapter in the SP story. The event took a retrospective look at SP's achievements and thanked staff for their support in making the anniversary celebrations a success. The finale saw the unveiling of SP's 50th Anniversary Commemorative Book which highlights amongst others, the contribution of Singapore's pioneer polytechnic to the development of the nation and how its success spawned the establishment of other polytechnics here.",
    2007: "The SP Scholarship Programme was launched in March 2007 with first batch of 40 SP Scholars receiving their scholarships.<br><br>Food Innovation and Resource Centre, a one-stop consultancy centre to assist Small and Medium-sized Enterprises (SMEs), is officially opened by Minister of State for Trade and Industry, Mr Lee Yi Shyan.<br><br>Singapore Maritime Academy celebrates 50 years as a leading provider of maritime education and training.<br><br>SP Design School was launched on 29 January.",
    2008: "Mr Tan Hang Cheong took over as the new Principal at the start of 2008.<br><br>Singapore Polytechnic opens new School of Communication, Arts and Social Sciences (CASS) on 1 February.",
    2010: "The Professional and Adult Continuing Education (PACE) Academy was officially launched on 20 April by Mr Lee Yi Shyan, Minister of State for Manpower, Trade and Industry.<br><br>150,000 graduates milestone achieved!",
    2013: "Mr Tan Choon Shian took over as the new Principal at the start of 2013.",
    2014: "SP's 60th anniversary!<br><br>SP’s new vision – <i>A caring community of inspired learners committed to serve with mastery</i> was announced.<br><br>Launch of the Perfumery and Cosmetic Science Centre to support students studying the Diploma in Perfumery and Cosmetic Science.<br><br>A new five-storey Design School building was unveiled.",
    2018: "200,000th graduates milestone achieved!",
    2023: "Launch of the SP’s 70th anniversary commemorative book “For All Ages, Singapore Polytechnic At Seventy” at the third Polytechnic-ITE (POLITE) Staff Appreciation Day on 31 October 2023, where Minister of Education Mr Chan Chun Sing officiated and marked the commencement of SP’s 70th anniversary celebrations.",
    2024: "SP's 70th anniversary!"
}

for (let year in history) {
    switch (Math.floor(year / 10) * 10) {
        case 1950:
            var id = "fifties";
            break;
        case 1960:
            var id = "sixties";
            break;
        case 1970:
            var id = "seventies";
            break;
        case 1980:
            var id = "eighties";
            break;
        case 1990:
            var id = "nineties";
            break;
        case 2000:
            var id = "zeroes";
            break;
        case 2010:
            var id = "tens";
            break;
        case 2020:
            var id = "twenties";
            break;
    }
    document.getElementById(id).innerHTML += (`<p><strong>${year}</strong> - ${history[year]}</p>\n`);
}

// The Statistics
function add (target, current) {
    return Math.ceil(0.01 * (target - current));
}

// function animateCount (target, id, prepend) {
//     let count = 0;
//     document.getElementById(id).innerHTML = (prepend + " 0");
//     while (count < target) {
//         setTimeout(function () {}, 1000);
//         count += add(target, count);
//         document.getElementById(id).textContent = (prepend + " " + count);
//     }
// }

function isElementIntoView(el) { 
    var e = document.querySelector(el);
    var rect = e.getBoundingClientRect();
    return  window.innerHeight-rect.top >= 0;     
}

window.onload = function () { 
    //animateCount(235600, "graduates", ">");
    var count1 = 0;
    var count2 = 0;
    var count3 = 0

    setInterval(function () {
        count1 += add(235600, count1);
        document.getElementById("graduates").textContent = ("> " + count1);
    }, 1);

    setInterval(function () {
        count2 += add(10, count2);
        document.getElementById("schools").textContent = count2;
    }, 1);

    setInterval(function () {
        count3 += add(100, count3);
        document.getElementById("electives").textContent = ("> " + count3);
    }, 1);
}


// document.getElementById("invisible").onload = 

// Countdown to SP's birthday!
setInterval(countdown, 1000);

function countdown() {
    // Calculate countdown
    let difference = new Date("October 27, 2024 00:00:00") - new Date();

    // Days
    let days = parseInt(difference / (1000 * 60 * 60 * 24));
    let daysDifference = difference % (1000 * 60 * 60 * 24);
    let sd = "s";
    if (Math.abs(days) == 1) {
        sd = "";
    }
    document.getElementById("days").innerHTML = Math.abs(days) + "<br>day" + sd;

    // Hours
    let hours = parseInt(daysDifference / (1000 * 60 * 60));
    let hoursDifference = daysDifference % (1000 * 60 * 60);
    let sh = "s"
    if (Math.abs(hours) == 1) {
        sh = "";
    }
    document.getElementById("hours").innerHTML = Math.abs(hours) + "<br>hour" + sh;

    // Minutes
    let minutes = parseInt(hoursDifference / (1000 * 60));
    let minutesDifference = hoursDifference % (1000 * 60);
    let sm = "s"
    if (Math.abs(minutes) == 1) {
        sm = "";
    }
    document.getElementById("minutes").innerHTML =  Math.abs(minutes) + "<br>minute" + sm;

    // Seconds
    let seconds = parseInt(minutesDifference / (1000));
    let ss = "s"
    if (Math.abs(seconds) == 1) {
        ss = "";
    }
    document.getElementById("seconds").innerHTML = Math.abs(seconds) + "<br>second" + ss;

    if (days <= 0 && hours <= 0 && minutes <= 0 && seconds < 0) {
        document.getElementById("birthday-header").innerHTML = "SP's 70<sup>th</sup> birthday was...";
        document.getElementById("birthday-footer").innerHTML = "ago";
    } else {
        document.getElementById("birthday-footer").innerHTML = "";
    }

    if (days == 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
        document.getElementById("birthday-message").innerHTML = "Happy birthday SP!"
    }
}

// Shh... You didnt see anything!!!

// Easter Egg 1
if (randInt(1, 100) == 1) {
    document.getElementById("secret-1").innerHTML += " 🎉";
}