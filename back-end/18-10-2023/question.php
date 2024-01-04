<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Question</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</head>
<body>
  <div class="container col-md-5 mt-5 text-center">
    <form action="result-question.php" method="get">
      <div class="form-control">
        <label for="" class="d-block mb-3 text-success">Digite um número:</label>
        <input class="form-control" type="number" name="number" placeholder="Digite o numero" />
        <div class="d-block mt-3">
          <input type="submit" class="btn btn-success" name="submit" value="Testar" />
        </div>
      </div>
    </form> 
  </div>

</body>
</html>