// Écris une fonction qui prend en argument un nombre entier et retourne son carré. Affiche le résultat dans la console. Objectif : Je donne 3 à ma fonction, j’obtiens 9. Je donne 2 à ma fonction, j’obtiens 4.

function numberSquared(number) {
    return number*number
}

console.log(numberSquared(3))

// Stocke le résultat de la fonction dans une variable (c’est-à-dire, créé une variable qui sera égale à 
// l’appel de la fonction). Nous allons utiliser cette variable pour la donner à une autre fonction . 
// Ecris une autre fonction qui va multiplier par 10, la variable précédente. 
// Affiche le résultat dans la console. 
// Objectif : Je donne 9 à ma fonction de multiplication, j’obtiens 90.

function multiplication(number) {
    return number*10
}

let result = multiplication(9)
console.log(result)

// Modifie le code existant et demande à l’utilisateur via une fonction existante 
// (que tu dois rechercher), le nombre qui sera en entrée de la première fonction. 
// Objectif : L’utilisateur rentre un nombre, disons 4. 
// Dans la console, je dois voir successivement 16 et 160.

function askNumber(number) {
    let response = parseInt(window.prompt("Entrez un nombre entier"))
    if (typeof response === "number") {
        console.log(response)
        let responseNumberSquared = numberSquared(response)
        console.log(responseNumberSquared)
        let responseMultiplication = multiplication(responseNumberSquared)
        console.log(responseMultiplication)
    } else {
        let message = "Nombre invalide"
        console.log(message)
    }  
}

console.log(askNumber())
