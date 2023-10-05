const inputbox=document.getElementById("todoinput")
const listcontainer=document.getElementById("list-container")
const button=document.querySelector("button");


button.addEventListener("click", ()=>{
    function todoLIst(){
        if(inputbox.value===""){
            alert("YOU MUST INPUT A VALUE")
        }else{
            let li=document.createElement("li")
            li.innerHTML=inputbox.value;
            listcontainer.appendChild(li)
            let span=document.createElement("span")
            span.innerText= "\u00d7";
            li.appendChild(span)
        }
    }
    todoLIst()
    inputbox.value=""
    saveData()
}, false)

listcontainer.addEventListener("click", (e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData()
    }else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove()
            saveData()
        }
})


     function saveData(){
        localStorage.setItem("mylist", listcontainer.innerHTML);
     }

       function getData(){
          listcontainer.innerHTML = localStorage.getItem("mylist");
       }
       getData()