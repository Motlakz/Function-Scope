const container = document.querySelector('#container');

const content = document.createElement('section');
content.classList.add('content');
content.textContent = 'This is the magnificent text-content';
container.appendChild(content);

const para = document.createElement('p');
para.textContent = "Hey, I'm red!";
para.style.cssText = 'color: red;'
container.appendChild(para);

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';
container.appendChild(h3);

const div = document.createElement('div');
div.style.cssText = 'border: 2px solid black;'
div.style.backgroundColor = 'pink';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
div.appendChild(h1);

const p = document.createElement('p');
p.textContent = 'ME TOO!';
div.appendChild(p);

container.appendChild(div);