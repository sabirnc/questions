const addBtn = document.getElementById("add")
const addBtn2 = document.getElementById("add-2")
const addBtn3 = document.getElementById("add-3")
const closeBtn = document.getElementById("close-btn")
const closeBtn2 = document.getElementById("close-btn2")
const closeBtn3 = document.getElementById("close-btn3")
const text = document.getElementById("text")
const text2 = document.getElementById("text-2")
const text3 = document.getElementById("text-3")

addBtn.addEventListener("click", function(){
   text.style.display = "block"
   if(text.style.display === "block"){
    addBtn.style.display = "none"
    closeBtn.style.display = "block"
   }
   text2.style.display = "none"
   addBtn2.style.display = "block"
   closeBtn2.style.display = "none"

   text3.style.display = "none"
   addBtn3.style.display = "block"
   closeBtn3.style.display = "none"
})

closeBtn.addEventListener("click", function(){
   text.style.display = "none"
   if(text.style.display === "none"){
    closeBtn.style.display = "none"
    addBtn.style.display = "block"
   }

})


addBtn2.addEventListener("click", function(){
  text2.style.display = "block"
  if(text2.style.display === "block"){
    addBtn2.style.display = "none"
    closeBtn2.style.display = "block"
  }
    text.style.display = "none"
    addBtn.style.display = "block"
    closeBtn.style.display = "none"

    text3.style.display = "none"
    addBtn3.style.display = "block"
    closeBtn3.style.display = "none"
})

closeBtn2.addEventListener("click",function(){
    text2.style.display = "none"
    if(text.style.display === "none"){
        closeBtn2.style.display = "none"
        addBtn2.style.display ="block"
    }
})


addBtn3.addEventListener("click", function(){
   text3.style.display = "block"
   if(text3.style.display === "block"){
       addBtn3.style.display = "none"
       closeBtn3.style.display = "block"
   }

   text.style.display = "none"
   addBtn.style.display = "block"
   closeBtn.style.display = "none"

   text2.style.display = "none"
   addBtn2.style.display = "block"
   closeBtn2.style.display = "none"
})

closeBtn3.addEventListener("click", function(){
    text3.style.display ="none"
    if(text3.style.display === "none"){
        closeBtn3.style.display = "none"
        addBtn3.style.display = "block"
    }
})
