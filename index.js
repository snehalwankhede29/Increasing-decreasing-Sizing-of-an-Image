let imageEl = document.getElementById("image");
let paraEL = document.getElementById("para");

originalImage = 200;
minimumImage = 100;
maximumImage = 250;

function negative(){
    if(originalImage<=minimumImage){
        paraEL.textContent = "Image Size is Enough";
    }
    else{
        originalImage = originalImage - 5;
        let updateOriginalImage = originalImage;
        paraEL.textContent = " ";
        imageEl.style.width = updateOriginalImage + "px";
    }
}

function orginal(){
    imageEl.style.width = "200px";
    imageEl.style.height = "200px";
}

function positive(){
    if(originalImage >= maximumImage){
        paraEL.textContent = "Image Size is too Enough";
    }
    else{
        originalImage = originalImage + 5;
        let updateOriginalImage = originalImage;
        paraEL.textContent = " ";
        imageEl.style.width = updateOriginalImage + "px";
    }
}