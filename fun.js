let num1=8
let num2=2
document.getElementById('num1-el').textContent=num1
document.getElementById('num2-el').textContent=num2
sumEl=document.getElementById('sum-el')
function add(){
    sum=num1+num2
    sumEl.textContent='Result: '+sum
}
function sub(){
    sum=num1-num2
    sumEl.textContent='Result: '+sum
}
function mut(){
    sum=num1*num2
    sumEl.textContent='Result: '+sum
}
function div(){
    sum=num1/num2
    sumEl.textContent='Result: '+sum
}