const sideBar = document.querySelector('.sideBar')
const btnAdd =  document.querySelector('.btnAdd')
const dateInp = document.querySelector('.date')
const textInp = document.querySelector('.text')
const btnSave = document.querySelector('.btnSave')
const list = document.querySelector('.list')

let arr = []
let conditionBtnSave = false
let currentIndex

btnAdd.onclick=()=>{
    sideBar.classList.toggle('show')
}

btnSave.onclick=()=>{
    if(conditionBtnSave === true){
        arr[currentIndex].date = dateInp.value
        arr[currentIndex].text = textInp.value
        list.children[currentIndex].children[0].textContent = dateInp.value
        list.children[currentIndex].children[1].textContent = textInp.value
        conditionBtnSave = false
        dateInp.value = ''
        textInp.value = ''
    }else{
        oneNote(dateInp.value,textInp.value,arr.length)
        arr.push({
            date: dateInp.value,
            text: textInp.value
        })
        console.log('add')
    }
    sideBar.classList.remove('show')
    myLocalStorage()
}

const data = localStorage.getItem('list')
if(data){
    arr = JSON.parse(data)
    for(let i=0; i<arr.length; i++){
        oneNote(arr[i].date,arr[i].text,i)
    }

    myLocalStorage()
}

function oneNote(date,text,index){
    const li = document.createElement('li')
    const spanDate = document.createElement('span')
    const spanText = document.createElement('span')
    const edit = document.createElement('button')
    const myDelete = document.createElement('button')
    spanDate.style.padding = '5px'
    spanDate.textContent = date
    spanText.textContent = text
    edit.innerHTML = '&#9998'
    myDelete.innerHTML = '&#x2715;'
    list.appendChild(li)
    li.appendChild(spanDate)
    li.appendChild(spanText)
    li.appendChild(edit)
    li.appendChild(myDelete)
    edit.onclick=()=>{
        dateInp.value = date
        textInp.value = text
        sideBar.classList.add('show')
        conditionBtnSave = true
        currentIndex = index
    }
    myDelete.onclick=()=>{
        li.remove()
        arr.splice(index,1)
        myLocalStorage()
    }
}

function myLocalStorage(){
    const data = JSON.stringify(arr)
    localStorage.setItem('list',data)
}






























