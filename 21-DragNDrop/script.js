const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drop', dragDrop)
}

function dragStart() {
  this.className += ' hold'
  setTimeout(() => (this.className = 'invisible'), 0)
}

function dragEnd() {
  this.className = 'fill'
}

function dragOver(e) {
  // 在事件流的任何阶段调用preventDefault()都会取消事件，
  // 这意味着任何通常被该实现触发并作为结果的默认行为都不会发生。
  // more information please see https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault
  e.preventDefault()
}

function dragEnter(e) {
  e.preventDefault()
  this.className += ' hovered'
}

function dragLeave() {
  this.className = 'empty'
}

function dragDrop() {
  this.className = 'empty'
  this.append(fill)
}
