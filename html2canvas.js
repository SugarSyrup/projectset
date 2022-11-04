import html2canvas from "html2canvas";

html2canvas(document.body).then((canvas) => {
    var myImage = canvas.toDataURL();
    downloadURI(myImage, "namecard.png") 
})