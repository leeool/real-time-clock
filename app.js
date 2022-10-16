const clock = document.querySelector(".clock")
const turn = document.querySelector(".turn")
const changeMode = document.querySelector(".change-mode")
let i = 0

const getHours = () => {
  const present = new Date()

  let h = present.getHours()
  let m = present.getMinutes()
  let s = present.getSeconds()
  s <= 9 ? s = `0${s}` : null
  m <= 9 ? m = `0${m}` : null
  h <= 9 ? h = `0${h}` : null
  
  return { h, m, s }
}

const pauseIntervalOnClick = (id) => {
  changeMode.addEventListener("click", () => {
    clearInterval(id)
  })
}

const mode24Hours = () => {
  const display24 = `${getHours().h}:${getHours().m}:${getHours().s}`

  clock.textContent = display24

  let refresh = setInterval(mode24Hours, 1000)
  pauseIntervalOnClick(refresh)
}

const mode12Hours = () => {
  let display12 = `${getHours().h}:${getHours().m}:${getHours().s}`

  if (getHours().h > 12) {
    display12 = `${getHours().h - 12}:${getHours().m}:${getHours().s}`
  }

  clock.textContent = display12
  showTurn()

  let refresh = setInterval(mode12Hours, 1000)
  pauseIntervalOnClick(refresh)
}

const showTurn = (h) => {
  getHours().h >= 0 && getHours().h <= 12 ? turn.textContent = "am" : turn.textContent = "pm"
}

changeMode.addEventListener("click", () => {
  ++i

  if (i % 2) {
    turn.textContent = ""
    mode24Hours()
  } else {
    mode12Hours()
  }
})
