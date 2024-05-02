
function getIMG(input) {
    if (input.files && input.files[0]) {
    
        var reader = new FileReader();
        reader.onload = function (e) { 
            document.getElementById('output').setAttribute("src",e.target.result);
        };

        reader.readAsDataURL(input.files[0]); 

        document.getElementById("add-image").style.display = "none";
        document.getElementById("edit-image").style.display = "flex";
        
        
    }
}

function nextStep(){
    if(document.getElementById("add-image").style.display === "none" && document.getElementById("edit-image").style.display === "flex"){
        document.getElementById("real-img").setAttribute("src", document.getElementById('output').getAttribute("src"))

        document.documentElement.style.setProperty("--watermark-max-height", (Number(document.getElementById("real-img").style.height) / 10))
        document.documentElement.style.setProperty("--watermark-max-width", (Number(document.getElementById("real-img").style.width) / 10))

        let textRadio = document.getElementById("text");
        let imageRadio = document.getElementById("image");

        textRadio.checked = false;
        imageRadio.checked = false;

        document.getElementById("edit-watermarks").style.display = "flex";
        document.getElementById("aside").style.display = "flex";
        document.getElementById("body").style.gridTemplateColumns = "0.3fr 1fr"
        document.getElementById("edit-image").style.display = "none"
        document.getElementById("next-step").innerText = "SAVE IMAGE";

    }
    else if(document.getElementById("body").style.gridTemplateColumns === "0.3fr 1fr"){

        html2canvas(document.querySelector("#photo")).then(canvas => {
            var link = document.createElement('a');
            link.download = 'watermarkedImage.png';
            link.href = canvas.toDataURL();
            link.click();
        })
    }
}

function previousStep(){
    document.getElementById("edit-watermarks").style.display = "none";
    document.getElementById("aside").style.display = "none";
    document.getElementById("body").style.gridTemplateColumns = "1fr"
    document.getElementById("edit-image").style.display = "none"
    document.getElementById("next-step").innerText = "NEXT STEP";
    document.getElementById("edit-image").style.display = "none"
    document.getElementById("add-image").style.display = "flex";
    document.getElementById("watermark-text-container").style.display = "none";
    document.getElementById("watermark-image-container").style.display = "none";
}