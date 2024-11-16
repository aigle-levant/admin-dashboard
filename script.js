let nameInput = document.querySelector('.name-input');
let inputBtn = document.querySelector('.input-btn');
let inputBox = document.querySelector('.pop-up');
let outputText = document.querySelector('.output-text');

let sideBar = document.querySelector('.side-bar');
let mainContent = document.querySelector('.main-content');
let attribution = document.querySelector('.attribution');
let modeBtn = document.querySelector('.mode-btn');
let lightModeIcon = document.querySelector('.mode-btn .dark-mode');
let darkModeIcon = document.querySelector('.mode-btn .light-mode');
let body = document.body;

//pop-up stuff
function closePopUp()
{
    inputBox.classList.add('hide');
    sideBar.classList.remove('hide');
    mainContent.classList.remove('hide');
    attribution.classList.remove('hide');
}
inputBtn.addEventListener("click", getInputFromUser);
function getInputFromUser()
{
    let inputValue = nameInput.value;
    if (inputValue)
    {
        outputText.textContent = inputValue;
    }
    closePopUp();
}
function popUp()
{
    inputBox.classList.remove('hide'); // Show the pop-up on load
    sideBar.classList.add('hide');
    mainContent.classList.add('hide');
    attribution.classList.add('hide');
}
window.onload = popUp;

//trigger light and dark modes

function changeColourMode()
{
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    lightModeIcon.classList.toggle('hide');
    lightModeIcon.classList.toggle('show');
    darkModeIcon.classList.toggle('hide');
    darkModeIcon.classList.toggle('show');
}
modeBtn.addEventListener('click', changeColourMode);
