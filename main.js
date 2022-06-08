
function openBlock() {
 var block = document.getElementById("block");   
    // console.log("active");
    // block.classList.add("active");
    if (block.style.display != "flex") {
        block.style.display = "flex"; //Показываем элемент
      } else block.style.display = "none"; //Скрываем элемент
    }
    // block.setAttribute('class',"block active");
    // block.removeAttribute("none");

    // block.classList.add("none");
    // block.classList.remove("active");
   
