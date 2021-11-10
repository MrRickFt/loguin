$(document).ready(function(){
   
    $('#register').hide();
    $('#msj').hide();
    $('#msj2').hide();


    var datos = ['jr1@gmail.com', '123456', 'jeol19@gmail.com', 'asdj21'];
    

    //Link Registrarme
    
    $('#btn_registrarme').click(function(){
        $('#register').show();
        $('#ingreso_div').hide();
    })

    $('#btn_sig_in').click(function(){
        $('#register').hide();
        $('#ingreso_div').show();
    })


    
        //validar ingreso 
        $('#btn_ingresar').click(function(){
               
            var user = $('#ing_email').val();
            var pass = $('#ing_pass').val();

             
            
            var  validar_email =( datos.includes( user ) );
            console.log(validar_email);
            
            if(user.length == 0 || pass.length == 0){
                
                $('#msj').show();
                $('#msj').text('Por favor rellene los campos').css("color", "red");
            }else if(validar_email == true){
                var position_email = datos.indexOf(user);
                var contrasenia = datos[position_email+1];
                var tipo = typeof(contrasenia);
                console.log(tipo);
                console.log(contrasenia);

                    if(user == datos[position_email] && pass == contrasenia){
                        console.log("Ingreso exitoso");
                        $('#msj').show();
                        $('#msj').text('Inicio de sesión correcto').css("color", "green");
                        $('#ing_pass').css("border", "none");
                        $('#ing_email').val('');
                        $('#ing_pass').val('');;
                    } else{
                        console.log("contraseña incorrecta");
                        $('#msj').show();
                        $('#msj').text('Contraseña incorrecta').css("color", "red");
                        $('#ing_pass').val('');
                        $('#ing_pass').css("border", "1px solid red")
                    }

            }else{
                $('#msj').show();
                        $('#msj').text('Este usuario no existe, por favor registrese').css("color", "red");
                        $('#ing_pass').val('');
                        $('#ing_pass').css("border", "1px solid red")
                        console.log("nada manin");
            }
            
          }) 
         
  
          //REGISTRAR USUARIO
    $('#btn_registrar').click(function(){
        $('#msj2').show();
        var rg_user = $('#user_registre').val();
        var rg_name = $('#name').val();
        var rg_pass = $('#pass_registre').val();

       
        if(rg_user.length == 0 || rg_name.length == 0 || rg_pass.length == 0){
                $('msj2').show();
                $('#msj2').text('Por favor llene todos los campos').css("color", "red"); 
              
            } else{
                var  rg_validar_email =( datos.includes( rg_user ) );
            
                console.log(rg_validar_email);
                if(rg_validar_email == true){
                    $('#msj2').text('Este e-mail ya está en uso. Por favor inicie sesión').css("color", "red"); 
                    $('#user_registre').css("border", "1px solid red")
                    $('#name').val('');
                    $('#pass_registre').val('');
                    
                } else {
                    datos.push(rg_user, rg_pass, rg_name);
                    $('#msj2').text('Usuario creado correctamente').css("color", "green");
                    $('#name').val('');
                    $('#user_registre').val('');
                    $('#pass_registre').val('');
                    console.log(datos);
                            
                }
            }
            
           
        
    })
       
        


})
