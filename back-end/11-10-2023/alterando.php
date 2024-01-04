<?php
    $conta1 = [
      'titular' => 'Vinicius',
      'saldo' => 1000
    ];
  
    $conta2 = [
      'titular' => 'Maria',
      'saldo' => 1000
    ];
  
    $conta3 = [
      'titular' => 'Alberto',
      'saldo' => 300
    ];

    $contaCorrentes = [
      1234545454 => $conta1,
      1234545488 => $conta2,
      8888778154 => $conta3
    ];

    
  // adicionando 
  $contaCorrentes['1234545454'] = [
    'titular' => 'Claudia',
    'saldo' => 2000
  ];

  foreach ($contaCorrentes as $cpf => $conta) {
    echo $cpf. " " . $conta['titular'] . "<hr>";
  }