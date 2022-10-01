const menubtn = document.getElementById("menubtn");
const menubar = document.getElementById("menubar");
const head = document.getElementById("header")

menubtn.addEventListener('click' , ()=>{
    menubtn.classList.toggle("active");
    if(menubtn.classList.contains("active")){
    menubar.style.right = "0%"
    }
    else{
        menubar.style.right = "-100%"
    }
})

window.onscroll = ()=>{
    menubar.style.right = "-100%"
    if(window.scrollY > 20){
        head.classList.add("stickup")
      }
      else{
          head.classList.remove("stickup")
      }
   
}
