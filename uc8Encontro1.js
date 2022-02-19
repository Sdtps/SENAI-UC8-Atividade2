var listaDePecas = ["Amortecedor", "Motor", "Filtro de Ar"] //vetor ou array

for (var i = 0; i < listaDePecas.length; i++) {
    if (listaDePecas[i].length > 2) {
        console.log(`O nome da peça ${listaDePecas[i]} está ok`)
    } else if (listaDePecas[i].length == 0) {
        console.log(`O nome da peça não pode ser vazio`)
    } else {
        console.log(`O nome da peça ${listaDePecas[i]} não pode ser menor que 3`)
    }
}
if (nomePeca.length > 3) {
    console.log ("Nome da peça esta adequado para o codastro")
}