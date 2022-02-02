let txt = document.getElementById('txt');
for (let i=10; i>=3; i--) {
    txt.innerHTML += i + " - ";
};
txt.innerHTML += "Acabou!";