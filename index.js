var timedom = document.getElementById("time")
var mdom = document.getElementById("am-pm")
var daydome = document.getElementById("day")
var daynumdom = document.getElementById("daynum")
var monthdom = document.getElementById("month")
var yeardom = document.getElementById("year")

setInterval (t, 1000)
function t () {
    let m = ""
    let date = new Date()
    let hours = date.getHours()
    if (hours < 12) {
        m = "AM"
        if (hours > 9) {
            hours = hours
        }
        else if (hours < 9) {
            hours = "0" + hours 
        }
    }
    else if (hours > 12) {
        hours = hours -12
        m = "PM"
        if (hours < 9) {
            hours = "0" + hours
        }
        else {
            hours = hours
        }    
    }
    else if (hours = 0 ) {
        hours = 12
        m = "AM"
    }
    else if (hours = 12){
        hours = 12
        m = "PM"
    }

    let minutes = date.getMinutes()
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    else if (minutes > 10) {
        minutes = minutes
    }

    let seconds = date.getSeconds()
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    else if (seconds > 10) {
        seconds = seconds
    }
    let time = hours + ":" + minutes + ":" + seconds
    timedom.innerHTML = time
    mdom.innerHTML = m

    let day = date.getDay()
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    daydome.innerHTML = days[day - 1]

    let daynum = date.getDate()
    daynumdom.innerHTML = daynum

    let month = date.getMonth()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November",  "December"]
    monthdom.innerHTML = months[month]

    let year = date.getFullYear()
    yeardom.innerHTML = year
}