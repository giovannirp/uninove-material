<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Numeros</title>
</head>
<body>

<?php 


  // No PHP existe uma função para gerar números randômicos. A mesma se chamada rand. 
  // Na função você pode especificar um intervalo de números a ser gerado.

      $txtNumero = $_POST['txtNumero'];
      $gera = rand(1,2);

      
      echo "numero gerado $gera";

      echo "<br>";

      if($gera == $txtNumero) {
        echo "Você venceu com o número: ".$txtNumero;
      } else {
        echo "Você perdeu, tente novamente.";
      }
    

    ?>
  
</body>
</html>