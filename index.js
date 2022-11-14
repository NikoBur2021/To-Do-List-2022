const add = document.querySelector('.add')
const sideBar = document.querySelector('.sideBar')
const date = document.querySelector('.date')
const text = document.querySelector('.text')
const save = document.querySelector('.save')
const list = document.querySelector('.list')


add.onclick=()=>{
    sideBar.classList.toggle('show')
}

let arr = []
let currentEdit = false
let currentIndex

save.onclick=()=>{
    if(currentEdit === true){
        arr[currentIndex].date = date.value
        arr[currentIndex].text = text.value
        list.children[currentIndex].children[0].textContent = date.value
        list.children[currentIndex].children[1].textContent = text.value
    }else{
        console.log('ADD')
        const dateIn = date.value
        const textIn = text.value
        arr.push({
            date: dateIn,
            text: textIn
        })
        oneNote(dateIn,textIn)
    }
    myLocalStorage()
}

let data = localStorage.getItem('list')
if(data){
    arr = JSON.parse(data)
    for(let i=0; i<arr.length; i++){
        oneNote(arr[i].date,arr[i].text,i)
    }
}

function myLocalStorage(){
    let data = JSON.stringify(arr)
    localStorage.setItem('list',data)
}

function oneNote(dateIn,textIn,i){
    const li = document.createElement('li')
    const spanDate = document.createElement('span')
    const spanText = document.createElement('span')
    const edit = document.createElement('button')
    spanDate.textContent = dateIn
    spanText.textContent = textIn
    edit.textContent = 'Edit'
    list.appendChild(li)
    li.appendChild(spanDate)
    li.appendChild(spanText)
    li.appendChild(edit)
    edit.onclick=()=>{
        sideBar.classList.add('show')
        date.value = dateIn
        text.value = textIn
        currentEdit = true
        currentIndex = i
    }
    myLocalStorage()
}






























