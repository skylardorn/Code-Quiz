const $startBtn = document.getElementById("start-btn");
const questions = [
    {
       question: "What do you use (bracket wise) to create an array?",
       options: ["sure", "maybe", "okay", "[]"],
       answer: "[]",
    },
    {
        question: "What HTML element do you use for the top of a document?",
        options: ["dairy aisle", "microsoft", "<chill></chill>", "<head></head>"],
        answer: "[]",
    },
    {
        question: "Do you use a comma inside of an object?",
        option: ["dairy aisle", "microsoft", "yes", "<head></head>"],
        answer: "yes",
    }
];

window.onclick = color;

function color() {
    document.getElementsByTagName("body")[0].style.backgroundColor = green;
}


var mins = 1;
var secs = mins * 60;
console.log(mins, secs)

function countdown() {
    setTimeout(decrement(), 60)
}

function decrement() {
    if (document.getElementById) {
        minutes = document.getElementById('minutes')
        seconds = document.getElementById('seconds');

        if (seconds > 59) {
            seconds.value = secs;
        } else {
            minutes.value = getminutes();
            seconds.value = getseconds();
        }

        if (mins < 0) {
            alert('Times up');
            minutes.value = 0;
            seconds.value = 0;

        }

        else {
            secs--;
            setTimeout(decrement(), 1000);
        }

    }
}

function getminutes() {
    mins = Math.floor(secs / 60);
    return mins;
}

function getseconds() {
    return secs - Math.round(mins * 60)
}



$startBtn.addEventListener("onclick", countdown(questions));




// let timeoutID;

// function setOutput(outputContent) {
//   $startBtn.textContent = outputContent;
// }

// function delayedMessage() {
//   setOutput('');
//   timeoutID = setTimeout(setOutput, 6*1000, 'Times up.');
// }

// function clearMessage() {
//   clearTimeout(timeoutID);
// }
