const timeLived = (input) => {
    const date1 = new Date(input);
    const date2 =  Date.now();
    let delta = Math.abs(date2 - date1) / 1000;
    let minutes = Math.floor(delta / 60);
    let diff = `${minutes} minutes lived`;
    return (diff);
}

module.exports = timeLived;
