const addBtn = document.getElementById('add')

// 获得note的数据将它储存起来
const notes = JSON.parse(localStorage.getItem('notes'))

if (notes) {
  // 将note数据添加进notes里面
  notes.forEach((note) => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
  const note = document.createElement('div')
  note.classList.add('note')

  note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>
    `

  //  get element
  const editBtn = note.querySelector('.edit')
  const deleteBtn = note.querySelector('.delete')
  const main = note.querySelector('.main')
  const textArea = note.querySelector('textarea')

  textArea.value = text
  main.innerHTML = marked(text)

  deleteBtn.addEventListener('click', () => {
    note.remove()

    updateLS()
  })

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
  })

  textArea.addEventListener('input', (e) => {
    const { value } = e.target

    main.innerHTML = marked(value)

    updateLS()
  })

  document.body.appendChild(note)
}

function updateLS() {
  // get all textarea object
  const notesText = document.querySelectorAll('textarea')

  const notes = []

  notesText.forEach((note) => {
    // console.log(note.value)
    //将数据给放入数组内
    notes.push(note.value)
  })

  // 设置名字为notes的localStorage
  localStorage.setItem('notes', JSON.stringify(notes))
}
