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

  // echo $conta1['titular'];
  $contaCorrentes = [$conta1, $conta2, $conta3];

// imprimir os titulares da conta
for ($i = 0; $i < count($contaCorrentes); $i++) {
  echo $contaCorrentes[$i]['titular'] . "<br>";
  echo $contaCorrentes[$i]['saldo'] . "<br>";
  echo "<hr>";
}