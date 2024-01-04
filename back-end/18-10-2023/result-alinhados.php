<?php
  $idade = $_GET['age'];
  
 if ($idade < 16) {
  echo "Você ainda não pode votar.";
 } else if ($idade < 18) {
  echo "Seu voto é facultativo";
 } else {
  echo "Você pode votar";
 }