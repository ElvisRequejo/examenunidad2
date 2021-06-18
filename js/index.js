var data = sessionStorage.getItem('user'); 
$("#login").html(""+data+"</b>");

function pagina(op){

    if(op==1){
        $("#todo").load("home.html");
    }
    if(op==2){
        $("#todo").load("contactos.html");
    }
    if(op==3){
        $("#todo").load("raiz.html");
    }
    if(op==4){
        $("#todo").load("ejemplos.html");
    }
    if(op==5){
        window.location = 'login.html';
    }
}
function raiz(){
    var n = $("#numero").val();
    $("#resultado").val(Math.sqrt(n));
}