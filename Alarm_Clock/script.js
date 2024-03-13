var alarmForm = document.querySelector('.alarm-form');
var alarmTimeInput = document.getElementById('alarmTime');
var alarmMessageInput = document.getElementById('alarmMessage');
var setAlarmButton = document.getElementById('setAlarmBtn');
var alarmStatus = document.getElementById('alarmStatus');

setAlarmButton.addEventListener('click', () => {
    var alarmTime = alarmTimeInput.value;
    var alarmMessage = alarmMessageInput.value;
    setAlarm(alarmTime, alarmMessage);
});

function setAlarm(time, message) {
    var [hours, minutes] = time.split(':');
    var now = new Date();
    var alarm = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

    if (alarm > now) {
        const timeDiff = alarm - now;
        setTimeout(() => {
            playAlarm(message);
        }, timeDiff);
    
    alarmStatus.textContent = `Alarm set for ${time}`;
  } 
  else {
    alarmStatus.textContent = 'Invalid time. Please choose a future time.';
  }
}

function playAlarm(message) {
  alert(message);
  alarmStatus.textContent = 'Alarm triggered!';
  alarmTimeInput.value = '';
  alarmMessageInput.value = '';
}