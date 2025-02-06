const qrText= document.querySelector("#qr-text");
const size = document.querySelector("#size");
const generate = document.querySelector("#generate");
const download = document.querySelector("#download");
const qrBody = document.querySelector(".qr-body");

let qrSize=size.value;
download.classList.add("disabled");

generate.addEventListener('click' , (e)=>{
    e.preventDefault()
    isEmpty();
  

})

function isEmpty(){
    if(qrText.value.length>0)
   {
         
   generateQRcode()
   download.classList.remove("disabled"); 
   }
    else
    alert("Please Enter the text")
}

size.addEventListener('change' ,(e)=>{
    qrSize=e.target.value;
    isEmpty();

})  
download.addEventListener('click' , (e)=>{
    let img = document.querySelector(".qr-body img");
    if(img!==null){
        let imgAttr = img.getAttribute("src");
        download.setAttribute("href" , imgAttr);
    }
    else{
        alert("Please Generate the QR ")
        e.preventDefault(); // because thisresone that form will submit
     }
})


//let sizeOfQr=size.value;
function generateQRcode(){
    qrBody.innerHTML="";
    new QRCode(qrBody , {
        text:qrText.value , 
        height:qrSize,
        width:qrSize,
        colorLight:"#fff",
        colorDark: "#000"   
    })
}

