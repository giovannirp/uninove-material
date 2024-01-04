<?php
  $numero = $_GET['number'];

  if($numero % 2 === 0) {
    echo "$numero é par";
  } else {
    echo "$numero é ímpar";
  }