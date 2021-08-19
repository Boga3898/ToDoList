let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling'); // styling of p tag 
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph); //appending the data 
    inputField.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through"; // on single click it will make "As task completed"
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph); // On double click it will completly remove the task from list
    })
})
