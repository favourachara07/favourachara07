// let lapCompleted=0
// function incre() {
//     lapCompleted=lapCompleted+1
// }
// incre()
// incre()
// incre()
// console.log(lapCompleted)
//camelCase
let countEl=document.getElementById('count-el')
console.log(countEl)
let count=0
function increment() {
    count+=1
    countEl.textContent=count
}

function save(){
    let saveEl=document.getElementById('save-el')
    let str=count+' - '
    saveEl.textContent+=str
    countEl.textContent=0
    count=0
}

let welcomeEl=document.getElementById('welcome-el')
let name2='Favour'
let greeting2='Welcome back '
let tot=greeting2+name2
welcomeEl.innerText=tot
welcomeEl.innerText+='#'

