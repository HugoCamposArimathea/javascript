let num = [6, 9, 5, 4, 1]

num.push(8)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(5)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor 5 está na posição ${pos}`)
}