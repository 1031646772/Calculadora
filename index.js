const numberSelect=document.querySelectorAll(".calcuB");
const pantalla=document.getElementById("number");
const numberSelect2=document.querySelectorAll(".calcuB3");

numberSelect.forEach(Element=> {
    Element.addEventListener("click",()=>{
    const BotonON=Element.textContent;
        if(pantalla.textContent==="0" || pantalla.textContent==="Error"){
            if ( pantalla.textContent==="Error"){
                pantalla.textContent="0"
            }
            else{
                pantalla.textContent=BotonON;
            }
        }
        else if(Element.id==="limpiar" ||  pantalla.textContent==="Error"){
            pantalla.textContent="0"
        }
        else if(Element.id==="retroceder"){
            if(pantalla.textContent.length===1){
                pantalla.textContent="0"
            }
            else{
                pantalla.textContent=pantalla.textContent.slice(0,-1);
            }
            return
        }
        else if(Element.id==="igual"){
            if (pantalla.textContent.includes("//")){
                    pantalla.textContent="Error";
            }
            else{
            try{
            pantalla.textContent=eval(pantalla.textContent)
            }
            catch{
            pantalla.textContent="Error";
            }
            }
        }
        else{
            if (pantalla.textContent==="Error"){
                pantalla.textContent="0"
            }
            else{
                pantalla.textContent+=BotonON
            }
        }
    });     
});
numberSelect2.forEach(Element=> {
    Element.addEventListener("click",()=>{
    const BotonON=Element.textContent;
        if(pantalla.textContent==="0" || pantalla.textContent==="Error"){
            if ( pantalla.textContent==="Error"){
                pantalla.textContent="0"
            }
            else{
                pantalla.textContent=BotonON;
            }
        }
        else if(Element.id==="limpiar" ||  pantalla.textContent==="Error"){
            pantalla.textContent="0"
        }
        else if(Element.id==="retroceder"){
            if(pantalla.textContent.length===1){
                pantalla.textContent="0"
            }
            else{
                pantalla.textContent=pantalla.textContent.slice(0,-1);
            }
            return
        }
        else if(Element.id==="igual"){
            if (pantalla.textContent.includes("//")){
                    pantalla.textContent="Error";
            }
            else{
            try{
            pantalla.textContent=eval(pantalla.textContent)
            }
            catch{
            pantalla.textContent="Error";
            }
            }
        }
        else{
            if (pantalla.textContent==="Error"){
                pantalla.textContent="0"
            }
            else{
                pantalla.textContent+=BotonON
            }
        }
    });     
});
    



