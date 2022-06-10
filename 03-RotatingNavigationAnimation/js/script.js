// 获得元素
const open = document.getElementById('open')
const close = document.getElementById('close')
const navList = document.getElementById('navList')
const container = document.querySelector('.container')

console.log(container.classList)
// 绑定点击事件
// 添加class
// open.addEventListener('click', () => container.classList.add('show-nav'))
open.addEventListener('click', () => container.classList.add('show-nav'))

// 移除class
// close.addEventListener('click', () => navList.classList.remove('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))
