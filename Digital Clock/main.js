const hourEL = document.getElementById('hour')
const minuteEL = document.getElementById('minute')
const secondEL = document.getElementById('second')
const ampmEl = document.getElementById('ampm')

function updateClock() {
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let ampm = "AM"

  if (h > 12) {
    ampm = "PM"
    ampmEl.textContent = ampm
  }

  // This sets a 0 before the number if the time is under 10
  h = h < 10 ? "0" + h : h
  m = m < 10 ? "0" + m : m
  s = s < 10 ? "0" + s : s

  hourEL.textContent = h
  minuteEL.textContent = m
  secondEL.textContent = s
  ampmEl, (textContent = ampm)

  // This refreshes the second
  setTimeout(() => {
    updateClock()
  }, 1000)
}

updateClock()