// function getCurrentDateTime() {
//     const currentDate = new Date();

//     const year = currentDate.getFullYear();
//     const month = String(currentDate.getMonth() + 1).padStart(2, '0');
//     const day = String(currentDate.getDate()).padStart(2, '0');
//     const hours = String(currentDate.getHours()).padStart(2, '0');
//     const minutes = String(currentDate.getMinutes()).padStart(2, '0');
//     const seconds = String(currentDate.getSeconds()).padStart(2, '0');

//     const timeZoneOffset = -currentDate.getTimezoneOffset();
//     const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
//     const timeZoneOffsetString = `UTC${timeZoneOffset >= 0 ? '+' : ''}${Math.floor(timeZoneOffset / 60)}:${String(Math.abs(timeZoneOffset % 60)).padStart(2, '0')}`;

//     const formattedDate = `${year}-${month}-${day}`;
//     const formattedTime = `${hours}:${minutes}:${seconds}`;
//     const fullDateTime = `${formattedDate} ${formattedTime} (${timeZone}, ${timeZoneOffsetString})`;

//     document.getElementById('date-time-display').innerText = fullDateTime;
// }
// getCurrentDateTime();