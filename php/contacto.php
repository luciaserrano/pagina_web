<?php

if(isset($_POST['enviar'])){

    if(!empty($_POST['email']) && !empty($_POST['message'])){

        $email = $_POST['email'];

        $asunto = $_POST['mensaje'];
        $mensaje = $_POST['mensaje'];

        $header = "Form: noreply@example.com". "\r\n";

        $header.= "Reply-To: noreply@example.com". "\r\n";

        $header.= "X-Mailer: PHP/". phpversion();

        $mail = @mail($email,$aunto,$mensaje,$header);
        if($mail){
            echo "<h4>Emaik enviado</h4>";
        }else{
            echo "<h4>Emaijthsghjeiuyg enviado</h4>";
        }
    }
}





?>