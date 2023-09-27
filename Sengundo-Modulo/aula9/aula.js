// SwitvhCase

const data = new Date("1987-04-21 00:00:00");

let diaSemana = data.getDay();
diaSemana = 8;
let diaSemanaTexto;


console.log(diaSemana , diaSemanaTexto );

function getDayText(diaSemana) {

    switch (diaSemana) {
        case 0:
            
        diaSemanaTexto = "Domingo";
    
            break;
    
        case 1:
            
            diaSemanaTexto = "Segunda";
        
                break;
    
        case 2:
            
            diaSemanaTexto = "Terça";
            
               break;
    
         case 3:
            
            diaSemanaTexto = "Quarta";
                
                break;
    
         case 4:
            
            diaSemanaTexto = "Quinta";
                    
                break;
    
         case 5:
            
            diaSemanaTexto = "Sexta";
                        
                break;
        case 6:
            
          diaSemanaTexto = "Sabado";
                            
             break;
                                                                                        
    
        default:
     diaSemanaTexto = "";
            break;

            return diaSemanaTexto;
    }
}
/*
switch (diaSemana) {
    case 0:
        
    diaSemanaTexto = "Domingo";

        break;

    case 1:
        
        diaSemanaTexto = "Segunda";
    
            break;

    case 2:
        
        diaSemanaTexto = "Terça";
        
           break;

     case 3:
        
        diaSemanaTexto = "Quarta";
            
            break;

     case 4:
        
        diaSemanaTexto = "Quinta";
                
            break;

     case 5:
        
        diaSemanaTexto = "Sexta";
                    
            break;
    case 6:
        
      diaSemanaTexto = "Sabado";
                        
         break;
                                                                                    

    default:
 diaSemanaTexto = "";
        break;
}
*/

/*
if(disSemana === 0){

    diaSemanaTexto = "Domingo";

} else if (disSemana === 1) {

    diaSemanaTexto = "Segunda";
    
} else if (disSemana === 2) {
    
    diaSemanaTexto = "Terça";

} else if (disSemana === 3) {
    
    diaSemanaTexto = "Quarta";
}
else if (disSemana === 4) {

    diaSemanaTexto = "Quinta";

} else if (disSemana === 5) {

    diaSemanaTexto = "Sexta";
} 
else if (disSemana === 6) {

    diaSemanaTexto = "Sabado";
} 
*/




