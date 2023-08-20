let tabs=document.querySelectorAll(".tabs li");
let Arraytabs=Array.from(tabs);


let contents=document.querySelectorAll('.contents >div');
let arrayContent=Array.from(contents);



// var for scroll btn
let scrollbtn=document.getElementById("scrolltop")

Arraytabs.forEach((elem)=>{
    elem.addEventListener('click' , function(e){
   Arraytabs.forEach((elem)=>{
    elem.classList.remove("active")
   })
   e.currentTarget.classList.add("active")

   arrayContent.forEach((divs)=>{
    divs.style.display="none"
   });
  document.querySelector(e.currentTarget.dataset.content).style.display="block"
   console.log(e.currentTarget.dataset.content)
    })
})
window.onscroll=function(){
    if(this.scrollY>=1000){
        scrollbtn.style.display="block"
    }else{
        scrollbtn.style.display="none"
    }
}
scrollbtn.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}