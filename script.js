const radioButtons = document.querySelectorAll('input[type="radio"]');
let index = 0;
function clickNextButton() {
  if (index < radioButtons.length) {
    radioButtons[index].click();
    index++;
    setTimeout(clickNextButton, 300);
  }
}
clickNextButton();

const x2Buttons = document.querySelectorAll('input[type="checkbox"]');
let index2 = 0;
function clickNextBox() {
  if (index2 < x2Buttons.length) {
    x2Buttons[index2].click();
    index2++;
    setTimeout(clickNextBox, 300);
  }
}
clickNextBox();

const startButtons = document.querySelectorAll('button[class="zb-button primary raised start-button start-graphic"]');
let index3 = 0;
function clickNextStartButton() {
  if (index3 < startButtons.length) {
    startButtons[index3].click();
    index3++;
    setTimeout(clickNextStartButton, 300);
  }
}
clickNextStartButton();

function clickNextPlayButton() {
  setTimeout(clickNextPlayButton, 100);
  let playButtons = document.querySelectorAll('button[aria-label="Play"]');
  let index4 = 0;
  if (index4 < playButtons.length) {
    playButtons[index4].click();
    index4++;
    setTimeout(clickNextPlayButton, 300);
  }
  let pauseButtons = document.querySelectorAll('button[aria-label="Pause"]');
  if (pauseButtons.length != 0) {
    clickNextPlayButton;
  }
}
clickNextPlayButton();

let index5 = 0;
function clickNextShowAnswerButton() {
  setTimeout(clickNextShowAnswerButton, 100);
  let showAnswerButtons = document.querySelectorAll('button[class="zb-button secondary show-answer-button"]');
  if (index5 < showAnswerButtons.length) {
    showAnswerButtons[index5].click();
    setTimeout(showAnswerButtons[index5].click(), 100);
    index5++;
    setTimeout(clickNextShowAnswerButton, 300);
  }
}
clickNextShowAnswerButton();

let index6 = 0;
function doShortResponse() {
    const shortCont = document.querySelectorAll('div.short-answer-question');
    if (index6 < shortCont.length) {
        let thisCont = shortCont[index6];
        const input = thisCont.querySelector('input[type="text"]');
        const chkbtn = thisCont.querySelector('button.check-button');
        const showAnswerButton = thisCont.querySelector('button.show-answer-button');
        const answer = thisCont.querySelector('span.forfeit-answer');

        // Click "Show answer" twice to reveal the answer
        setTimeout(() => showAnswerButton && showAnswerButton.click(), 50);
        setTimeout(() => showAnswerButton && showAnswerButton.click(), 100);

        // Wait for the answer to appear, then fill and check
        setTimeout(() => {
            if (answer && input) {
                console.log(`Filling answer for question ${index6 + 1}:`, answer.textContent);
                input.value = answer.textContent;
                input.dispatchEvent(new Event('input', { bubbles: true }));
                chkbtn && chkbtn.click();
            }
            index6++;
            setTimeout(doShortResponse, 300);
        }, 200);
    }
}
doShortResponse();