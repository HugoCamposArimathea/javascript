let txt = document.getElementById('txt');
let num1 = Number.parseInt(prompt("Digite um número acima de zero aqui: "));
for (let i=1; i<=num1; i++) {
    txt.innerHTML += i + " - ";
};
txt.innerHTML += "Acabou!";