const updateCountdown = () => {
    const diff = new Date() - new Date(2004, 7, 20, 16, 40)

    const years = Math.floor(diff / 31560000000);
    const days = Math.floor((diff % 31560000000) / 86400000);
    const hours = Math.floor((diff % 31560000000 % 86400000) / 3600000);
    const minutes = Math.floor((diff % 31560000000 % 86400000 % 3600000) / 60000);
    const seconds = Math.floor((diff % 31560000000 % 86400000 % 3600000 % 60000) / 1000);

    const elements = document.querySelectorAll(".countdownNum")
    elements[0].innerText = years;
    elements[1].innerText = days;
    elements[2].innerText = hours;
    elements[3].innerText = minutes;
    elements[4].innerText = seconds;
}
updateCountdown()
setInterval(updateCountdown, 1000)