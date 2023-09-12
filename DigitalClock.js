
function showTime() {
    const time = document.getElementById('clock');
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    time.innerText = `${hours}  :  ${minutes}  :  ${seconds}`;
}
setInterval(showTime, 1000)


// document.write(currentTime)
// setInterval