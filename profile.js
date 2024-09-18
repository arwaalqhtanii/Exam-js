

function getPrayerTimes() {
    fetch('https://api.aladhan.com/v1/calendarByCity?city=Riyadh&country=Saudi%20Arabia&method=2')
    
    .then(response => response.json())
    .then(data => {
        const today = new Date().getDate() - 1;
        const hijriDate = data.data[today].date.hijri.date;
        const gregorianDate = data.data[today].date.gregorian.date;
        const weekday = data.data[today].date.hijri.weekday.en;
        const timings = data.data[today].timings;

        document.getElementById('hijriDate').innerText = hijriDate;
        document.getElementById('gregorianDate').innerText = gregorianDate;
        document.getElementById('weekday').innerText = weekday;
        document.getElementById('fajr').innerText = timings.Fajr;
        document.getElementById('dhuhr').innerText = timings.Dhuhr;
        document.getElementById('asr').innerText = timings.Asr;
        document.getElementById('maghrib').innerText = timings.Maghrib;
        document.getElementById('isha').innerText = timings.Isha;
    })
    .catch(error => console.error('Error fetching :', error));
}

function showHijriDate() {
    document.getElementById('hijriDateContainer').style.display = 'block';
    document.getElementById('gregorianDateContainer').style.display = 'none';
}

function showGregorianDate() {
    document.getElementById('hijriDateContainer').style.display = 'none';
    document.getElementById('gregorianDateContainer').style.display = 'block';
}

window.onload = function() {
    getPrayerTimes();
}
























