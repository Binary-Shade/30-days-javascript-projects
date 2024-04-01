const li = document.getElementById('list');
let currentElement = '';

const listCreator = (count) => {
    for(let i=0; i<=count; i++){
        li.innerHTML += `<li class='list-item' data-value='${i}' draggable="true"> Item - ${i} </li>`
    }
}

const getPosition = ( value ) => {
    let elementIndex;
    let listItems = li.querySelectorAll('.list-item');
    listItems.forEach((element, index)=>{
        let eleVal = element.getAttribute('data-value');
        if(eleVal == value){
            eleVal = index;
        }
    })
    return eleVal;
}


const dragstart = (e) => {
    // console.log(e);
}

const dragover = (e) => {
    e.preventDefault();
    // console.log(e);
}
const droppper = (e) => {
    e.preventDefault();
    let x = e.clientX;
    let y = e.clientY;

    let targetItem = document.elementFromPoint(x,y);
    let currentvalue = currentElement.getAttribute('data-value')
    let targetValue = targetItem.getAttribute('data-value')

    let [currentPos, targetPos] = [getPosition(currentvalue), getPosition(targetValue)];
    console.log(currentPos, targetPos);

}


window.onload = async() =>{
    li.innerHTML = '';
    await listCreator(5);
    let listItems = document.querySelectorAll('.list-item');
    listItems.forEach(item=>{
        item.addEventListener('dragstart', dragstart, false);
        item.addEventListener('dragover', dragover, false);
        item.addEventListener('drop', droppper, false);
    })
}