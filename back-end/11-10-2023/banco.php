<?php
  $contasCorrentes = [
    '123.456.789-10' => [
        'titular' => 'Maria',
        'saldo' => 10000
    ],
    '123.456.789-11' => [
        'titular' => 'Alberto',
        'saldo' => 300
    ]
  ];

  $contasCorrentes['123.456.789-10']['saldo'] -= 500;

  // fazendo if 
  if (500 > $contasCorrentes['123.456.789-11']['saldo']) {
    echo 'Você não pode sacar este valor' . "<br> <br>";
  } else {
    $contasCorrentes['123.456.789-11']['saldo'] -= 500;
  }


  foreach ($contasCorrentes as $cpf => $conta) {
    echo $cpf . " " . $conta['titular'] . ' ' . $conta['saldo'] ."<br><br>";
}