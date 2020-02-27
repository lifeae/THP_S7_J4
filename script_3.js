/*
2.2. Opérations & boucles
2.2.2 Pyramide de Mario
  Ah la pyramide de Mario du pré-parcours. Que de bons souvenirs. Tu vas écrire un script appelé script_3.js
  Voici ce que devra afficher la console :
  "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"

  // Utilisateur rentre un nombre (par ex 5)
      #
     ##
    ###
   ####
  #####
  
*/

function pyramid(numberOfStairs) {
 for(let i=0; i < numberOfStairs; i++){
   console.log(i).repeat("_",4)  
 } 
}

let numberOfStairs = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
pyramid(numberOfStairs);