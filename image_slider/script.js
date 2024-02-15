let indexvalue = 1;

function btm_slide(e){
    showImg(indexvalue = e);
}

function side_slide(e){
    showImg(indexvalue += e);
}


function showImg(indexVal) {
    const img = document.querySelectorAll('img');
    const sliders = document.querySelectorAll('.btm-slides span');
    let i;

    if(indexVal > img.length){
        indexVal = 1;
    }
    if(indexVal <1 ){
        indexVal = img.length;
    }

    for(i=0; i<img.length; i++){
        img[i].style.display = "none";
    }

    for(i=0; i<img.length; i++){
        sliders[i].style.background = "rgba(255,255,255,0.1)";
    }
    img[indexVal -1 ].style.display = 'block';
    sliders[indexVal -1 ].style.background = 'black';
}

showImg(indexvalue);