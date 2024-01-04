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
      $conta1,
      $conta2,
      $conta3
    ];

    
  foreach ($contaCorrentes as $conta) {
    echo $conta['titular'] . " " . $conta['saldo'] . "<br>";
  }


    // $contaCorrentes = [
    //   1234545454 => $conta1,
    //   1234545488 => $conta2,
    //   8888778154 => $conta3
    // ];

  // foreach ($contaCorrentes as $indice => $conta) {
  //   echo $indice. " " . $conta['titular'] . "<hr>";
  // }