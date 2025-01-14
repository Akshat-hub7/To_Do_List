let inputText = document.querySelector(".input-text");
let listItems = document.querySelector(".list-items");
let listItem = document.querySelector(".list-item");

let addBtn = document.querySelector(".add-btn");
let deleteBtn = document.querySelector(".delete-btn");


addBtn.addEventListener("click", () => {
    let item = document.createElement("li");
    item.classList.add("list-item");
    
    let taskText =inputText.value;
    if(taskText == ""){
        alert("Please enter a task");
    }else{

        item.innerHTML=`
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
          `;
    
          
          listItems.appendChild(item);
          inputText.value = "";

        }
    let delBtn = item.querySelector(".delete-btn");
    



    // delete button functionality
    delBtn.addEventListener("click", () => {
        item.remove();
        item.innerHTML=""
    })

    item.addEventListener("click",() => {
        item.style.textDecoration= "line-through";

    })
})
