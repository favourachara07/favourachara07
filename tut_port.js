/*n=>n
    let itemClass=this.parentNode.getElementsByClassName*/
// // opening and closing services
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggles'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        console.log('Menu opened'); // Optional logging
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


const navLink=document.querySelectorAll('.nav_link')
function linkAction(){
    const navMenu= document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click', linkAction))

// opening and closing skills
const skillsContent = document.getElementsByClassName("skills_content"),
  skillsHeader = document.querySelectorAll(".skills_header");
function togggleSkills(){
  //dont understand
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills_close";
  }
  if (itemClass === "skills_content skills_close") {
    this.parentNode.className = "skills_content skills_open";
  }
};
skillsHeader.forEach((el) => {
  el.addEventListener("click", togggleSkills);
});

//basic understanding but still refer to chatgpt
// opening and closing services
const modalViews=document.querySelectorAll('.services_modal'),
  modalBtns=document.querySelectorAll('.services_button'),
  modalClose=document.querySelectorAll('.services_modal-close')
let modal=function(modalClick){
  modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn,i)=>{
  modalBtn.addEventListener('click',()=>{
    modal(i)
  })
})
modalClose.forEach((modalClose)=>{
  modalClose.addEventListener('click', ()=>{
    modalViews.forEach((modalView)=>{
      modalView.classList.remove('active-modal')
    })
  })
})
alert('not responsive yet')

