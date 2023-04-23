

//solicita 5 datos de 3 personas y le agradece


for(let j=1; j<=5; j++)
{
  for(let i=1; i<=5; i++)
  {

    switch (i)
      {
       case 1: //solicita nombre y apellido
          let nombre  = prompt("Ingresa tu Nombre y Apellido");
          if (nombre == '') 
            { i-- ; 
              console.log(`SIN DATOS`);
            }
          console.log(`${nombre}`);
          alert(`buenos dias ${nombre} a continuacion le haremos unas breves preguntas con el fin de tener datos mas presison para agilizar la llegada del tecnico a su domicilio`);
            
          break
      
       case 2:  //solicita direccion
         
          let direccion = prompt("Ingresa tu Direccion");
          if (direccion == '') 
            { i-- ; 
              console.log(`SIN DATOS`);
            }
          console.log(`${direccion}`);
    
          break
          
       case 3:  //solicita numero de telefono
          let numerodetelefono = prompt("Ingresa tu numero de Telefono");
          if (numerodetelefono == '') 
          { i-- ; 
            console.log(`SIN DATOS`);
          }
          console.log(`${numerodetelefono}`);
        
          break

        case 4:    //solicita datos del aire acondicionado
          let marcaytamaño = prompt("Ingresa marca y frigorias del aire acondicionado");
          
          if (marcaytamaño == '') 
          { i-- ; 
            console.log(`SIN DATOS`);
          }
          console.log(`${marcaytamaño}`);
        
          break

        case 5:    //solicita que elija una fecha disponible
          let fechadisponible = prompt("elige una fechas disponible: 15/04/2023, 16/04/2023, 17/04/2023");
          if (fechadisponible == '') 
          { i-- ; 
            console.log(`SIN DATOS`);
          } 
          console.log(`${fechadisponible}`);
         
          break
      } 
  }
  //agradece por confiar en nuestros servicios 
  alert("Gracias por confiar en nuestro sistema. Nos estaremos comunicando a la brevedad " );
 
}




  



