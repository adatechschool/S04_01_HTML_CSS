/*Écris une fonction formatDate qui prend une date sous forme de chaîne "YYYY-MM-DD" et la transforme en "DD/MM/YYYY".*/
let dDay = "2015-04-12";

function formatDate() {
    let date = dDay.split('-');
    return date[2] + '-' + date[1] + '-' + date[0];
}

console.log(formatDate(dDay));

/*Crée une fonction filterEvenNumbers qui prend un tableau de nombres et retourne un nouveau tableau contenant 
uniquement les nombres pairs.*/


/*Crée une fonction greet qui prend un nom en paramètre et affiche un message de bienvenue. 
Si aucun nom n'est fourni, la fonction doit utiliser "inconnu" comme valeur par défaut.*/






/*# Énoncé :
À partir du fichier HTML fourni, écrivez le code JavaScript permettant d'intercepter la soumission du formulaire.

Ce code devra :

- Empêcher la soumission du formulaire.
- Vérifier que la personne a plus de 18 ans.
- Vérifier que l'adresse e-mail n'est pas vide.
- Vérifier que l'adresse postale n'est pas vide.

Si toutes ces conditions sont remplies, un message de validation devra s'afficher sous forme de popup. Sinon, un message d'erreur devra être affiché directement dans le HTML.

Votre code devra être structuré en utilisant des fonctions.

## Aller plus loin
En cas d'erreur sur un champ du formulaire :

Encadrer le champ en rouge.
Afficher un message d'erreur expliquant la saisie incorrecte.*/

// let birthdate = document.getElementById("birthdate").elements;

