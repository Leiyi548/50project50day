//  获得元素
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

// 起始是从第一个开始，所以第一个下标是1
let currentActive = 1

// 添加监听事件
next.addEventListener('click', () => {
  currentActive++

  // 如果超出了就让它，在最后
  if (currentActive > circles.length) {
    currentActive = circles.length
    // currentActive = 1
  }

  update()
})

prev.addEventListener('click', () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
    // next.disabled = false
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
