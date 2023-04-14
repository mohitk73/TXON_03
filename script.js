
function addtask() {
    var input = document.getElementById("new-task-input");
    var task = input.value;
    var ul = document.getElementById("list-container");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    ul.appendChild(li);
    input.value = "";
  }
  
  
