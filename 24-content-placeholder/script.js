const title = document.getElementById('title')
const header = document.getElementById('header')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

// get date
const dateFmt = new Date()
const days = dateFmt.getDate() + '日'
const months = dateFmt.getMonth() + 1 + '月'
const years = dateFmt.getFullYear() + '年'

header.innerHTML =
  '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
title.innerText = 'Lorem ipsum dolor sit amet'
date.innerText = years + months + days
name.innerText = 'Leiyi548'
excerpt.innerHTML =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
profile_img.innerHTML =
  '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
