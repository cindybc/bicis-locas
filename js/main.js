function validateForm(){

      nombre= document.getElementById("name").value;
      apellido= document.getElementById("lastname").value;
      correo= document.getElementById("input-email").value;
      contraseña= document.getElementById("input-password").value;
      seleccion= document.getElementsByTagName("select")[0].selected= 1;

  
    if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(nombre))){
  	var nam= document.getElementsByClassName("name-container input-box")[0];
  	var span= document.createElement("span");
  	var campo1 = document.createTextNode("Debe ingresar su nombre.(Debe iniciar con mayúscula)");
  
    nam.appendChild(span);
    span.appendChild(campo1);

  }
    if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(apellido))){
  	var ape= document.getElementsByClassName("lastname-container input-box")[0];
  	var span= document.createElement("span");
  	var campo2 = document.createTextNode("Debe ingresar su apellido.(Debe iniciar con mayúscula)");
  
    ape.appendChild(span);
    span.appendChild(campo2);
  }
    if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(correo))) {
    var mail= document.getElementsByClassName("email-container input-box")[0];
  	var span= document.createElement("span");
  	var campo3 = document.createTextNode("Ingrese un email valido.(correo@mail.com)");
  
    mail.appendChild(span);
    span.appendChild(campo3);
  }
    if(contraseña == "" || contraseña.length < 6 || contraseña == "password" || contraseña == "123456" || contraseña == "098754"){
  	var clave= document.getElementsByClassName("form-group input-box")[0];
  	var span= document.createElement("span");
  	var campo4 = document.createTextNode("Ingrese su contraseña.(Debe ser mayor a 6 caracteres)");
  
    clave.appendChild(span);
    span.appendChild(campo4);"Ingrese su contraseña.(Debe ser mayor a 6 caracteres)"
  }
    else{
  	 document.getElementById("name").value= "";
     document.getElementById("lastname").value= "";
     document.getElementById("input-email").value= "";
     document.getElementById("input-password").value= "";

  }

};
