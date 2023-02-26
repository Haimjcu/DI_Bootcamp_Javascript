const timeTillHoliday = () => {
    const date1 =  Date.now();
    const date2 = new Date('2023-03-06 17:36:00');
    let delta = Math.abs(date2 - date1) / 1000;
    let days = Math.floor(delta / 86400);
    delta -= days * 86400;
    let hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    let minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    let seconds = Math.floor(delta % 60);
    minutes < 10 ? minutes='0'+minutes : "";
    seconds < 10 ? seconds='0'+seconds : "";
    let diff = `${days} days, ${hours}:${minutes}:${seconds}`;
    return (diff);
}

module.exports = timeTillHoliday;
