    var Usuario = document.forms['form']['contraseña']
    var contraseña = document.forms['form']['contraseña']
    var usuaro_error = document.getElementById('usuaro_error');
    var pass_error = document.getElementById('pass_error');
    
    Usuario.addEventListener('textInput', verificacionDeUsuario);
    contraseña.addEventListener('textInput',verificacionDepassword);
    
    function logear(){
    
     if (Usuario.value.length < 9  ) {
            Usuario.style.border = "1px solid red";
            email_error.style.display = "block";
            Usuario.focus();
            return false;
        }
             if (contraseña.value.length < 6 ) {
            contraseña.style.border = "1px solid red";
            pass_error.style.display = "block";
            contraseña.focus();
            return false;
        }
    


}

    function verificacionDeUsuario(){
        if (email.value.length >= 8 && Usuario=="1") {
            email.style.border = "1px solid silver";
            email_error.style.display = "none";
            return true;
        }
    }
    function verificacionDepassword(){
        if (contraseña.value.length >= 5 && contraseña=="1") {
            contraseña.style.border = "1px solid silver";
            contraseña.style.display = "none";
            return true;
        }
    }
 