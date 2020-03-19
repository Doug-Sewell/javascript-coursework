document.querySelector('.createdWithJS').innerHTML = 
`<p>This is a paragraph created entirely with JS.</p>
<p> We can do whatever we want like <a href="https://www.google.com/" target="_blank">link to Google.</a></p>`;

const orangeContent = document.querySelector('.orange-bg');

console.log(orangeContent.getAttribute('style'));

document.querySelector('.background-to-change').setAttribute('style','background-color: limegreen');

const purpleText = document.querySelector('.purple-text');
purpleText.style.color = 'purple';
purpleText.style.fontSize = '20px';

//Get access to class list:
const classContent = document.querySelector('.these').classList;

//Add a class:
classContent.add('newClass');

//Remove a class:
classContent.remove('newClass');

const awesome = document.querySelector('.awesome').classList;

//Adds the class since it isn't there normally.
awesome.toggle('cool');

//Removes the class we just added above.
awesome.toggle('cool');