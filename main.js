
function openBlock() {
 var block = document.getElementById("block");
 var conteiner = document.getElementById("conteiner");   
    // console.log("active");
    // block.classList.add("active");
    if (block.style.display != "flex") {
        block.style.display = "flex"; //Показываем элемент
        conteiner.style.display = "none";
      } else {
        block.style.display = "none";
        conteiner.style.display = "flex";
      }  //Скрываем элемент
      
}
    // block.setAttribute('class',"block active");
    // block.removeAttribute("none");

    // block.classList.add("none");
    // block.classList.remove("active");
   
