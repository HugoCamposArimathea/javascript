let txt = document.getElementById('txt');
for (let i=100; i >= 0; i -= 5) {
    txt.innerHTML += i + " - ";
};
txt.innerHTML += "Acabou!";