// h1 { color: red }
// .paragraph { ... }
// #pid { ... }

const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafo = document.querySelector('.parrafo')
const pid = document.querySelector('#pid')
const input = document.querySelector('input')

console.log(input.value)

console.log({
    h1,
    p,
    parrafo,
    pid,
    input,
});

// h1.innerHTML = 'Platzi <br> DOM'
h1.innerText = 'Platzi <br> DOM'
//console.log(h1.getAttribute('class'))
//h1.setAttribute('class', 'rojo')
h1.classList.add('rojo');
h1.classList.remove('verde');

input.value = "456"

const img = document.createElement('img');
img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Platzi.jpg/1200px-Platzi.jpg');
console.log(img);

pid.innerHTML = "";
pid.append(img);