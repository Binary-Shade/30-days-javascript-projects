const dropArea = document.querySelector('.drag-area'),
dragText = dropArea.querySelector('h2'),
btn = dropArea.querySelector('button'),
input = dropArea.querySelector('input'),
profile = dropArea.querySelector('.profile');
let file;

btn.onclick = () =>{
    input.click();
}

input.addEventListener('change', ()=>{
    file = input.files[0];
    dropArea.classList.add('active');
    showFile();
});

dropArea.addEventListener('dragover', (e)=> {
    e.preventDefault();
    dropArea.classList.add('active');
    dragText.innerText = 'release to upload';
})

dropArea.addEventListener('dragleave', (e)=> {
    e.preventDefault();
    dropArea.classList.remove('active');
    dragText.innerText = 'Drag and drop to upload files';
})

dropArea.addEventListener('drop', (e)=> {
    e.preventDefault();
    file = e.dataTransfer.files[0];
    showFile();
})



const showFile = () => {
    let fileType = file.type;
    let validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if(validTypes.includes(fileType)){
        const fileRead = new FileReader();
        fileRead.onload = () => {
            let fileUrl = fileRead.result;
            console.log(fileUrl);
            let imgTag = `<img class='image'width='60' height='100' src='${fileUrl}' alt='image'>`;
            profile.innerHTML = imgTag; // Append to avoid removing existing elements
            profile.style.display = 'block';
        }
        fileRead.readAsDataURL(file); // No need to log this, as it returns undefined
    }else{
        alert("This is not an image");
        dropArea.classList.remove('active');
        dragText.innerHTML = "Drag and drop to upload files";
    }
}
