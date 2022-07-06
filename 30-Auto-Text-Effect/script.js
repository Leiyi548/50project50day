const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
  textEl.innerText = text.slice(0, idx)
  console.log(text.slice(0, idx))
  idx++
  // 循环idx下标
  if (idx > text.length) {
    idx = 1
  }
  // 定时器
  setTimeout(writeText, speed)
}
speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value))
