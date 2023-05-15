function loge(){
   let Usuario=document.getElementById("Usuario").value;
   let contraseña=document.getElementById("contraseña").value;

   var usuaro_error = document.getElementById('usuaro_error');
   var pass_error = document.getElementById('pass_error');
   
   
   if (Usuario=="1" && contraseña=="1"){
      alert("exito");
      window.location.href("bien.html")
      
      
   }
   else
   {alert("contaseña incorrecta");

    }
}//else es de lo contrario//      
