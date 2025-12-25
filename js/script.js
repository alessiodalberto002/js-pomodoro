let timeLeft = 25 * 60; // 25 minuti in secondi
let isWorking = true;
let isRunning = false;
let intervalId = null;

const timerEl = document.getElementById('timer');
const statusEl = document.getElementById('status');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    isRunning = true;
    startBtn.disabled = true;
    pauseBtn.disabled = false;

    intervalId = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft === 0) {
            clearInterval(intervalId);

            // Cambio fase
            if (isWorking) {
                timeLeft = 5 * 60; // 5 minuti di pausa
                isWorking = false;
                statusEl.textContent = 'Pausa';
                alert('Tempo di pausa! 5 minuti di riposo.');
            } else {
                timeLeft = 25 * 60; // 25 minuti di lavoro
                isWorking = true;
                statusEl.textContent = 'Lavoro';
                alert('Pausa terminata! Torna al lavoro.');
            }

            isRunning = false;
            startBtn.disabled = false;
            pauseBtn.disabled = true;
            updateDisplay();
        }
    }, 1000);
}

function pauseTimer() {
    isRunning = false;
    clearInterval(intervalId);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

function resetTimer() {
    isRunning = false;
    clearInterval(intervalId);
    timeLeft = 25 * 60;
    isWorking = true;
    statusEl.textContent = 'Lavoro';
    updateDisplay();
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);