/**
 * This function calculate time difference in current time and given timestamp and return a human readable difference
 * @param {timestamp} timestamp - timestamp in seconds
 * @returns {String} - Human readable time difference from current time
 */
function secondsToStr(timestamp) {
    // TIP: to find current time in milliseconds, use:
    let current_time_milliseconds = new Date().getTime();
    let milliseconds = current_time_milliseconds - timestamp * 1000;

    if (milliseconds < 0) {
        console.log(current_time_milliseconds, timestamp * 1000);
        return "Invalid Time Diff";
    }

    function numberEnding(number) {
        return number > 1 ? "s" : "";
    }

    var temp = Math.floor(milliseconds / 1000);
    var years = Math.floor(temp / 31536000);
    if (years) {
        return years + " year" + numberEnding(years) + " ago";
    }
    var days = Math.floor((temp %= 31536000) / 86400);
    if (days) {
        return days + " day" + numberEnding(days) + " ago";
    }
    var hours = Math.floor((temp %= 86400) / 3600);
    if (hours) {
        return hours + " hour" + numberEnding(hours) + " ago";
    }
    var minutes = Math.floor((temp %= 3600) / 60);
    if (minutes) {
        return minutes + " minute" + numberEnding(minutes) + " ago";
    }
    var seconds = temp % 60;
    if (seconds) {
        return seconds + " second" + numberEnding(seconds) + " ago";
    }
    return "just now"; //'just now' //or other string you like;
}
