<?php
  include("conexao.php");
  $consulta = "SELECT * FROM usuarios";

  // die vai matar a conexão do programa se não dar certo
  
  /* (->) esse operador é conhecido informamente como seta, 
    serve para acessar propriedades ou métodos de um objeto
  */

  $con = $mysqli->query($consulta) or die($mysqli->error);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

</head>
<body>
  <div class="container">
    <?php 
      include("nav.php");
    ?>
    <table class="table table-striped border">
      <tr>
        <th>Id</th>
        <th>Nome</th>
        <th>Email</th>
        <th>Cidade</th>
        <th>Editar</th>
      </tr>
      <!--  $con->fetch_array vai percorrer cada coluna  -->
      <?php while($dado = $con->fetch_array()){ ?>
        <tr>
          <td><?php echo $dado["id"]; ?></td>
          <td><?php echo $dado["nome"]; ?></td>
          <td><?php echo $dado["email"]; ?></td>
          <td><?php echo $dado["cidade"]; ?></td>
          <td>
            <a  class="link-opacity-10-hover" href="editar.php?codigo=<?php echo $dado["id"]; ?>">Editar</a>
          </td>
        </tr>
        <?php } ?>
    </table>
  </div>
  
</body>
</html>