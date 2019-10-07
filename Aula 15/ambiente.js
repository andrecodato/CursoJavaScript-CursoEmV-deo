let num = [5, 8, 2, 9, 3]                               // Array
num.push(1)                                             // Adiciona o valor no final do array
num.sort()                                              // Organiza o array de forma crescente
console.log(num)                                        // Exibe o array
console.log(`O vetor tem ${num.length} posições`)       // Exibe o tamanho do array
console.log(`O primeiro valor do vetor é ${num[0]}`)    // Exibe o valor do array de indice 0
let posicao = num.indexOf(4)                            // Captura o indice(posição) do valor no array
if (posicao == -1) {                                    // Se a busca retornar -1,  quer dizer que o valor não foi encontrado
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${posicao}`)
}
                                                        