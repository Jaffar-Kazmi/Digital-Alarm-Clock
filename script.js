// Get elements
const clock = document.getElementById("clock");
const alarmInput = document.getElementById("alarm-time");
const setAlarmBtn = document.getElementById("set-alarm-btn");
const clearAlarmBtn = document.getElementById("clear-alarm-btn");
const statusMsg = document.getElementById("status-msg");

let alarmTime = null;
let alarmTimeout = null;

// Function to update the clock every second
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  clock.textContent = `${hours}:${minutes}:${seconds}`;

  if (alarmTime && `${hours}:${minutes}` === alarmTime) {
    triggerAlarm();
  }
}

// Set the alarm
setAlarmBtn.addEventListener("click", () => {
  if (alarmInput.value === "") {
    alert("Please select a time for the alarm!");
    return;
  }
  alarmTime = alarmInput.value;
  statusMsg.textContent = `Alarm set for ${alarmTime}`;
});

// Clear the alarm
clearAlarmBtn.addEventListener("click", () => {
  alarmTime = null;
  clearTimeout(alarmTimeout);
  statusMsg.textContent = "Alarm cleared";
});

// Trigger alarm function
function triggerAlarm() {
  alert("⏰ Wake up! Alarm ringing!");
  alarmTime = null;
  statusMsg.textContent = "Alarm triggered!";
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();
