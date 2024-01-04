<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Detalhes</title>
</head>
<body>
  
  <?php 
      $nota = $_GET['nota'];

      echo "Sua nota é: $nota";

      // se a nota do aluno for maior que 6, você está aprovado.
      // senão está reprovado

      if ($nota >= 6) {
        echo "<br>";
        echo "<strong class='title'>Parabéns, conseguiu.</strong>";
      } else {
        echo "<br>";
        echo "<strong class='title'>Reprovado.</strong>";
      }
    ?>
    <a href="nota.php">Voltar</a>
</body>
</html>

