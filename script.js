const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const para = document.createElement('p');
para.style.color = 'red';
para.textContent = "Hey, I'm red!";
container.appendChild(para);

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

const div = document.createElement('div');
div.style.cssText = 'background: pink';
div.style.borderStyle = 'solid';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div!";
div.appendChild(h1);

const p = document.createElement('p');
p.textContent = "ME TOO!";
div.appendChild(p);

container.appendChild(div);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

function alertFunction() {
    alert("YAY! YOU DID IT!");
}

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener("click", alertFunction);