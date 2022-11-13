const $startBtn = document.getElementById("start-btn");
const timeDiv = document.getElementById("time-div");
let questions = [
    {
       question: "What do you use (bracket wise) to create an array?",
       options: ["sure", "maybe", "okay", "[]"],
       answer: "[]",
    },
    {
        question: "What HTML element do you use for the top of a document?",
        options: ["dairy aisle", "microsoft", "<chill></chill>", "<head></head>"],
        answer: "<head></head>",
    },
    {
        question: "Do you use a comma inside of an object?",
        option: ["dairy aisle", "microsoft", "yes", "<head></head>"],
        answer: "yes",
    }
];
let questionsNEW = questions.split('');

function countDown() {
    let timeLeft = 60;

    let timeInterval = setInterval(function () {
        if (timeLeft === 0) {
            alert('Game has ended. Would you like to play again?')
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
            displayMessage();
          }
        }, 1000);
    };

// building timer






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
