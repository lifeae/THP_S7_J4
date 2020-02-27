/*
2.2. Opérations & boucles
2.2.1 Calculs rapides
  Créé un script script_2.js qui définira la fonction factorielle et qui calculera la factorielle du nombre entré par l'utilisateur.
  Petit exemple rapide :
    factorielle(5) = 5*4*3*2*1 et factorielle(10) = 10*9*8*7*6*5*4*3*2*1
    
  Voici ce que dois faire le script :
    // Un prompt s'affiche avec la question suivante
    "De quel nombre veux-tu calculer la factorielle ?"
    // Utilisateur rentre un nombre (par ex 4)
    // Dans la console le résultat suivant est affiché
    "Le résultat est : 24"
*/
function factorielle(number) {
  let result = 1;
  for(i=0; i < number; i++){
    result = result*number;
  }
  console.log(`La factorielle de ${number} est ${result}`);
}
number = prompt(`De quel nombre veux-tu calculer la factorielle ?`);
factorielle(number);