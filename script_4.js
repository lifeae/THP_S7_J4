/*
2.3. Analyses de données
2.3.1. Startup Nation
  Tu es en train d'écrire un livre sur les entrepreneurs américains et tu te renseignes sur leurs dates de naissance pour voir si tu ne peux pas identifier un millésime à succès.
  Pendant ta recherche tu tombes sur une array contenant des entrepreneurs connus et leurs dates de naissance.
    const entrepreneurs = [
      { first: 'Steve', last: 'Jobs', year: 1955 },
      { first: 'Oprah', last: 'Winfrey', year: 1954 },
      { first: 'Bill', last: 'Gates', year: 1955 },
      { first: 'Sheryl', last: 'Sandberg', year: 1969 },
      { first: 'Mark', last: 'Zuckerberg', year: 1984 },
      { first: 'Beyonce', last: 'Knowles', year: 1981 },
      { first: 'Jeff', last: 'Bezos', year: 1964 },
      { first: 'Diane', last: 'Hendricks', year: 1947 },
      { first: 'Elon', last: 'Musk', year: 1971 },
      { first: 'Marissa', last: 'Mayer', year: 1975 },
      { first: 'Walt', last: 'Disney', year: 1901 },
      { first: 'Larry', last: 'Page', year: 1973 },
      { first: 'Jack', last: 'Dorsey', year: 1976 },
      { first: 'Evan', last: 'Spiegel', year: 1990 },
      { first: 'Brian', last: 'Chesky', year: 1981 },
      { first: 'Travis', last: 'Kalanick', year: 1976 },
      { first: 'Marc', last: 'Andreessen', year: 1971 },
      { first: 'Peter', last: 'Thiel', year: 1967 }
    ];

  Réalise un script script_4.js qui affichera dans la console les questions suivantes et leur réponses :
      Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
      Sors une array qui contient le prénom et le nom des entrepreneurs ;
      Quel âge aurait chaque inventeur aujourd'hui ?
      Trie les entrepreneurs par ordre alphabétique du nom de famille.
*/

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log(entrepreneurs);
console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70");
console.log();
console.log("Sors une array qui contient le prénom et le nom des entrepreneurs");

console.log();
console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
console.log();
console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.");
console.log();