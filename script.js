function ir(){
    var c=1258;
    var u="oscar";
    if(document.forms.password.value==c || document.forms.login.value==u){
    //alert("BIENVENIDOS A LA PAGINA WEB");
    if(document.forms.password.value==c){
        if(document.forms.login.value==u){
            window.location="paginaprincipal.html";
        }
        else{
            alert("USUARIO INCORRECTO");
        }
    }
    else{
        if(document.forms.login.value==u){
            alert("PASSWORD INCORRECTO");
        }
    }
    }
    else{
    alert("USUARIO Y PASSWORD INCORRECTO");
    }
}

function numeros(n){
    key=n.keyCode || n.which;
    teclado=String.fromCharCode(key);
    numero="0123456789";
    especiales="8-37-38-46";
    teclado_especial=false;

    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial=true;
        }
    }
    if(numero.indexOf(teclado)==-1 && !teclado_especial){
        return false;
    }
}
