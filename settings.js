let text = document.getElementById("textbox");
let color = document.getElementById("color");

let sizeText = document.querySelector(".text-editor #size")
let opacityText = document.querySelector(".text-editor #opacity")

let sizeImage = document.querySelector(".image-editor #size")
let opacityImage = document.querySelector(".image-editor #opacity")

let watermarkImageDiv = document.getElementById("watermark-image-container");
let watermarkTextDiv = document.getElementById("watermark-text-container");
let watermarkImage = document.getElementById("watermark-image");
let realIMG = document.getElementById("real-img");

let textRadio = document.getElementById("text");
let imageRadio = document.getElementById("image");

textRadio.onclick = function(){
    if(textRadio.checked){
        watermarkTextDiv.style.display = "block";
    }else{
        watermarkTextDiv.style.display = "none";
    }
}

imageRadio.onclick = function(){
    if(imageRadio.checked){
        watermarkImageDiv.style.display = "block";
    }else{
        watermarkImageDiv.style.display = "none";
    }
}

color.onblur = function(){
    var colorValue = String(color.value);
    
    if(colorValue.charAt(0) === "#" && colorValue.length == 7){
        watermarkTextDiv.style.color = colorValue;
    }
}

text.addEventListener("keyup", function(e){
    watermarkTextDiv.innerText = text.value;

    if(String(text.value).length == 0){
        watermarkTextDiv.innerText = "Text goes here";
    }
})

let sizeInterval;

sizeText.addEventListener("mousedown", function(){
    sizeInterval = setInterval(() => {
        if(textRadio.checked){
            var value = String(sizeText.value);
            var fontSize = 0.5 * Number(value)/10;
            
            watermarkTextDiv.style.fontSize = fontSize + "rem";
        }
    }, 0);
    
})

sizeText.addEventListener("mouseup", function(){
    clearInterval(sizeInterval);
})

sizeImage.addEventListener("mousedown", function(){
    sizeInterval = setInterval(() => {
        if(imageRadio.checked){

            var value = String(sizeImage.value);
            var width = 3 * Number(value)/10;
            
            watermarkImage.style.width = width + "rem";
        }
    }, 0);
    
})

sizeImage.addEventListener("mouseup", function(){
    clearInterval(sizeInterval);
})

let opacityInterval;

opacityText.addEventListener("mousedown", function(){
    if(textRadio.checked){
        opacityInterval = setInterval(() => {
            var value = opacityText.value;
            var opacityValue = Number(value)/100;
    
            console.log(opacityValue)
    
            watermarkTextDiv.style.opacity = opacityValue;
        }, 0);
    }
    
})

opacityText.addEventListener("mouseup", function(){
    clearInterval(opacityInterval);
})

opacityImage.addEventListener("mousedown", function(){
    opacityInterval = setInterval(() => {
        var value = opacityImage.value;
        var opacityValue = Number(value)/100;

        console.log(opacityValue)

        watermarkImageDiv.style.opacity = opacityValue;
    }, 0);
    
})

opacityImage.addEventListener("mouseup", function(){
    clearInterval(opacityInterval);
})

function getWatermark(input) {
    if (input.files && input.files[0]) {
    
        var reader = new FileReader();
        reader.onload = function (e) { 
            document.getElementById('watermark-image').setAttribute("src",e.target.result);
        };
        reader.readAsDataURL(input.files[0]); 

        document.getElementById('watermark-image').style.width = "30rem";
    }
}



