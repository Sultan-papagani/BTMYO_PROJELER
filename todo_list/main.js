var taskInput = document.getElementById('taskInput');
var addTaskButton = document.getElementById('addTaskButton');
var taskList = document.getElementById('taskList');
var errorbox = document.getElementsByClassName("errorbox")[0];

window.addEventListener('load', function() {
    onStart();
});

function onStart()
{
    document.getElementById("defaultOpen").click();
    taskInput = document.getElementById('taskInput');
    addTaskButton = document.getElementById('addTaskButton');
    taskList = document.getElementById('taskList');
    errorbox = document.getElementsByClassName("errorbox")[0];
    addTaskButton.addEventListener('click', onAdd)
}

function changeTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    // default hepsi kapalı
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablar");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }


    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function onAdd() {
    const taskText = taskInput.value;
    if (taskText !== '') {
      const newTaskItem = document.createElement('li');
      newTaskItem.textContent = taskText;
  
      const deleteButton = document.createElement('button');   
  
      deleteButton.textContent = 'Sil';
      deleteButton.style.marginLeft = "20px";
      deleteButton.style.fontSize = "10px";
      deleteButton.style.border = "1px solid black";
      deleteButton.style.borderRadius = "2px";
      deleteButton.style.width = "30px";
      deleteButton.style.height = "15px";
      deleteButton.style.textAlign = "center";
      deleteButton.addEventListener('click', () => {
        taskList.removeChild(newTaskItem);   
  
      });
  
      newTaskItem.appendChild(deleteButton);
      taskList.appendChild(newTaskItem);
  
      taskInput.value = '';
    }
    else
    {
      
    }
}