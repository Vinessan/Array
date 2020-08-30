//DESAFIO SEMANAL//pendente
var arr = [{ username: "Username", city: "City" }];

function arrValidada(a, prop) {
    let ordenada = a.slice();
    for (let i = 0; i < ordenada.length; i++) {
        for (let j = 0; j < ordenada.length - 1; j++) {
            if (ordenada[j][prop].toLowerCase() > ordenada[j + 1][prop].toLowerCase()) {
                let aux = ordenada[j];
                ordenada[j] = ordenada[j + 1];
                ordenada[j + 1] = aux;
            }
        }
    }

    return ordenada;
}

console.log("Usuário - Crescente (A-Z):");
console.table(arrValidada(arr, "username", 1));

console.log("Cidade - Crescente (A-Z): ");
console.table(arrValidada(arr, "city", 1));