const inputBox = document.getElementById("input-box");
const Listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        Listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savedata()
}
  Listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedata()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
}, false);
function savedata(){
    localStorage.setItem("data", Listcontainer.innerHTML);
}
function Showtask(){
    Listcontainer.innerHTML =localStorage.getItem("data")
}
 Showtask();