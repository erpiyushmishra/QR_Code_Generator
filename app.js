var input=document.querySelector(".input");
var button=document.querySelector(".button");
var image=document.getElementById("qrImage");



button.addEventListener("click",generateQR)


function generateQR(){
    if(input.value.length>0){
        image.setAttribute("src","https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value)


    }else{
        input.classList.add("error")
    }

}





