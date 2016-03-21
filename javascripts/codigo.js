/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function expandir(img){       

    if ($(window).width() > 1000) {
            document.getElementById('opaco').style.visibility='visible';
            document.getElementById('img_ext').style.visibility='visible';
            document.getElementById('img_ext').innerHTML='<img src="'+img+'" alt="img" width="100%" height="100%">';
            var alto = document.getElementById('img_ext').clientHeight;
            var a = alto+100;
            document.getElementById('opaco').style.height=a+'px';
    }
    else {
           window.location.href=img;
    }
    

}

function ocultar(){
    document.getElementById('opaco').style.visibility='hidden';
    document.getElementById('img_ext').style.visibility='hidden';
}
 
