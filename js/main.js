/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.2
 * @since   2019-08-19
 */

(function main() {
  'use strict'; // Demande une interprétation stricte du code

  const a = Number (prompt ('Entrez un nombre :'));
  const b = Number (prompt ('Entrez un nombre :'));

  if( isNaN(a) || isNaN(b) ) {
    alert('Entrez des nombres !');
    return;
  }

  alert (`Résultat: ${ a + b }`);

}()); // Main IIFE
