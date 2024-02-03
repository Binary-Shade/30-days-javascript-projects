const inputTask = document.getElementById("task");
const taskContent = document.querySelector(".tasks-container");
const checkbox = document.querySelectorAll("input[type='checkbox']");
const tasks = [];

function handleTask(value, e){
    if(value!=false){
        // console.log(value);
        let div = e.parentElement;
        let p = div.childNodes[3];
        p.classList.add("line-through");
        taskCounter();
    }else{
        let div = e.parentElement;
        let p = div.childNodes[3];
        p.classList.remove("line-through");
        taskCounter();
    }
}


function addTask(task) {
    if(task.length !=0){
        let taskDiv = `<div class="task bg-slate-600 mt-3 p-4 text-white w-full rounded max-h-30 text-left flex justify-between pending">
        <input type="checkbox" name="checkbox" id="chkbox" class="checked:bg-blue-400" onclick='handleTask(this.checked, this)'>
        <p class="text-white">${task}</p>
        <div class="icons w-20 flex gap-5">
                    <i class="fa-solid fa-pen-to-square cursor-pointer hover:text-sky-400"></i>
                    <i class="fa-solid fa-trash cursor-pointer hover:text-red-600" onclick='deleteTask(this.parentElement)'></i>
                </div>
    </div>`;
        taskContent.insertAdjacentHTML("afterbegin", taskDiv);
    }
    taskCounter();
    inputTask.value = '';
    
}

function taskCounter(){
    let count = document.querySelectorAll(".pending");
    document.getElementById("count").innerHTML = count.length;
    console.log(count.length);
    return count.length;
}


function deleteTask(e){
    e.parentElement.remove();
    taskCounter();
}

function removeAll(){
    taskContent.innerHTML = "";
    taskCounter();
}

const btn = document.getElementById("btn");
btn.addEventListener("click", (e)=>{
    let val = inputTask.value.trim();
    tasks.push(val);
    console.log(tasks);
    // let id = tasks.indexOf(val);
    // console.log("id"+id);
    // localStorage.setItem(id, val);
    addTask(val);
})
