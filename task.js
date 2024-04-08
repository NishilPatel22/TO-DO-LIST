let toDoListArray = [];
const taskArray = [];

const showCount = document.querySelector("#showCount");

const dataInLocal = localStorage.getItem("taskList");
const checkLocal = localStorage.getItem("Checked");

if (dataInLocal !== null) {
  toDoListArray = JSON.parse(dataInLocal);
  const checkedTask = JSON.parse(localStorage.getItem("Checked"))
    ? JSON.parse(localStorage.getItem("Checked"))
    : [];
  createTaskDesign(toDoListArray, checkedTask);
}

function saveTask() {
  const taskName = document.getElementById("taskTextBox").value;
  const toDOObj = {
    taskID: toDoListArray.length + 1,
    taskName: taskName,
  };
  toDoListArray.push(toDOObj);
  localStorage.setItem("taskList", JSON.stringify(toDoListArray));
  location.reload();
  createTaskDesign([toDOObj]);
}

function createTaskDesign(tasks, checkedTask) {
  document.getElementById("taskList").innerHTML = "";

  tasks.forEach(function (task, idx) {
    const textDiv = document.createElement("div");
    const textBox = document.createElement("input");
    const deleteBtn = document.createElement("input");
    const checkBox = document.createElement("input");
    const saveBtn = document.createElement("input");
    const completeBtn = document.createElement("input");

    textDiv.appendChild(checkBox);
    textDiv.appendChild(textBox);
    textDiv.appendChild(saveBtn);
    textDiv.appendChild(deleteBtn);
    textDiv.appendChild(completeBtn);

    textBox.classList.add("textBox");
    textBox.type = "text";
    textBox.value = task.taskName;
    textBox.style.width = "auto";
    textBox.style.marginLeft = "20px";

    saveBtn.classList.add("saveBtn");
    saveBtn.type = "button";
    saveBtn.value = "Save";
    saveBtn.addEventListener("click", function (event) {
      const index = toDoListArray.findIndex(
        (id) => id.taskID == event.target.taskID
      );
      const obj = toDoListArray.find((id) => id.taskID == event.target.taskID);
      if (index !== -1) {
        obj.taskName = textBox.value;
        localStorage.setItem("taskList", JSON.stringify(toDoListArray));
        location.reload(true);
      }
    });
    saveBtn.taskID = task.taskID;

    //* deleteBtn
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.type = "button";
    deleteBtn.value = "Delete";
    deleteBtn.addEventListener("click", function (event) {
      const index = toDoListArray.findIndex(
        (id) => id.taskID == event.target.taskID
      );
      toDoListArray.splice(index, 1);
      checkedTask.splice(index, 1);
      localStorage.setItem("taskList", JSON.stringify(toDoListArray));
      localStorage.setItem("Checked", JSON.stringify(checkedTask));
      location.reload();
    });
    deleteBtn.taskID = task.taskID;

    //* completeBtn
    completeBtn.classList.add("completeBtn");
    completeBtn.type = "button";
    completeBtn.value = "Complete";
    completeBtn.taskID = task.taskID;

    //* checkBox CSS
    checkBox.classList.add("checkBox");
    checkBox.type = "checkbox";
    checkBox.style.marginLeft = "10px";
    checkBox.addEventListener("click", function (event) {
      if (checkBox.checked) {
        checkedTask.push(textBox.value);
        completeBtn.style.backgroundColor = "orange";
      } else {
        const idx = checkedTask.indexOf(textBox.value);
        if (idx !== -1) {
          checkedTask.splice(idx, 1);
        }
        completeBtn.style.backgroundColor = "";
      }
      localStorage.setItem("Checked", JSON.stringify(checkedTask));
      location.reload();
    });

    checkBox.taskID = task.taskID;

    taskList.appendChild(textDiv);

    if (checkedTask) {
      for (const element of checkedTask) {
        if (element == taskList.children[idx].children[1].value) {
          taskList.children[idx].firstChild.checked = true;
          completeBtn.style.backgroundColor = "orange";
        }
        if (document.getElementsByClassName("deleteBtn").clicked == true) {
          checkedTask.splice(idx, 1);
          localStorage.setItem("Checked", JSON.stringify(checkedTask));
        }
      }
    }
    showCount.innerHTML = checkedTask.length;
  });
}
