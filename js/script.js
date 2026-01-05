// Timer Lavoro
let workTimeLeft = 25 * 60;
let workRunning = false;
let workIntervalId = null;

const workTimerEl = document.getElementById('workTimer');
const workStartBtn = document.getElementById('workStart');
const workPauseBtn = document.getElementById('workPause');
const workResetBtn = document.getElementById('workReset');
const workPanel = document.getElementById('workPanel');

// Timer Pausa
let breakTimeLeft = 5 * 60;
let breakRunning = false;
let breakIntervalId = null;

const breakTimerEl = document.getElementById('breakTimer');
const breakStartBtn = document.getElementById('breakStart');
const breakPauseBtn = document.getElementById('breakPause');
const breakResetBtn = document.getElementById('breakReset');
const breakPanel = document.getElementById('breakPanel');

function updateDisplay(seconds, element) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    element.textContent = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function activatePanel(panel) {
    workPanel.classList.remove('active');
    workPanel.classList.add('inactive');
    breakPanel.classList.remove('active');
    breakPanel.classList.add('inactive');
    panel.classList.remove('inactive');
    panel.classList.add('active');
}

// Funzioni Timer Lavoro
function startWork() {
    workRunning = true;
    workStartBtn.disabled = true;
    workPauseBtn.disabled = false;
    activatePanel(workPanel);

    workIntervalId = setInterval(() => {
        workTimeLeft--;
        updateDisplay(workTimeLeft, workTimerEl);

        if (workTimeLeft === 0) {
            clearInterval(workIntervalId);
            workRunning = false;
            workStartBtn.disabled = false;
            workPauseBtn.disabled = true;
            alert('Timer lavoro completato!');
        }
    }, 1000);
}

function pauseWork() {
    workRunning = false;
    clearInterval(workIntervalId);
    workStartBtn.disabled = false;
    workPauseBtn.disabled = true;
}

function resetWork() {
    clearInterval(workIntervalId);
    workRunning = false;
    workTimeLeft = 25 * 60;
    updateDisplay(workTimeLeft, workTimerEl);
    workStartBtn.disabled = false;
    workPauseBtn.disabled = true;
}

// Funzioni Timer Pausa
function startBreak() {
    breakRunning = true;
    breakStartBtn.disabled = true;
    breakPauseBtn.disabled = false;
    activatePanel(breakPanel);

    breakIntervalId = setInterval(() => {
        breakTimeLeft--;
        updateDisplay(breakTimeLeft, breakTimerEl);

        if (breakTimeLeft === 0) {
            clearInterval(breakIntervalId);
            breakRunning = false;
            breakStartBtn.disabled = false;
            breakPauseBtn.disabled = true;
            alert('Timer pausa completato!');
        }
    }, 1000);
}

function pauseBreak() {
    breakRunning = false;
    clearInterval(breakIntervalId);
    breakStartBtn.disabled = false;
    breakPauseBtn.disabled = true;
}

function resetBreak() {
    clearInterval(breakIntervalId);
    breakRunning = false;
    breakTimeLeft = 5 * 60;
    updateDisplay(breakTimeLeft, breakTimerEl);
    breakStartBtn.disabled = false;
    breakPauseBtn.disabled = true;
}

// Event Listeners
workStartBtn.addEventListener('click', startWork);
workPauseBtn.addEventListener('click', pauseWork);
workResetBtn.addEventListener('click', resetWork);

breakStartBtn.addEventListener('click', startBreak);
breakPauseBtn.addEventListener('click', pauseBreak);
breakResetBtn.addEventListener('click', resetBreak);