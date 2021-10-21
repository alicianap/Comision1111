function calcular(){
    var opcion=document.getElementById("categoria");
    var validar=parseInt(opcion.options[opcion.selectedIndex].value);
    var cant_tickets=document.getElementById("cantidad").value;
    var totalapagar=0;
    var precio=200;

    switch(validar){
        case 1:
            totalapagar=(precio*0.2)*cant_tickets;
            break;
        case 2:
            totalapagar=(precio*0.5)*cant_tickets;
            break;
        case 3:
            totalapagar=(precio*0.85)*cant_tickets;
            break;
    }
    document.getElementById("total").value="Total a pagar : $"+totalapagar;
}

function borrado(){
    document.getElementById("total").reset();
    document.getElementById("categoria").reset();
    document.getElementById("cantidad").reset();

}
