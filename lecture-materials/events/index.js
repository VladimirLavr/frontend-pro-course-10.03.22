console.log(`Hello, ${this.document.nodeName}`);

const button = document.querySelector('button');

let counter = 0;

const handler = (event) => {
  button.textContent = `Click count: ${++counter}`;
  console.log(`That was a ${event.type}!
Here is the object which descibes this event:
`, event);
}

button && button.addEventListener('click', handler);

// --------------------------------------------------

const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');

blue.addEventListener('click', (event) => {
  console.log('blue was clicked');
  event.stopPropagation();
});

blue.addEventListener('click', () => {
  console.log('blue was clicked {capture: true}');
}, {capture: true});

green.addEventListener('click', () => {
  console.log('green was clicked');
});

green.addEventListener('click', () => {
  console.log('green was clicked {capture: true}');
}, {capture: true});

red.addEventListener('click', () => {
  console.log('red was clicked');
  setTimeout(() => {
    red.classList.remove('half-visible');
  }, 1000);
});

red.addEventListener('click', () => {
  console.log('red was clicked {capture: true}');
  red.classList.add('half-visible');
}, {capture: true});


// --------------------------------------------------

const buttonsContainer = document.querySelector('.buttons-container');

function buttonClickHandler(buttonNumber) {
  console.log(buttonNumber);
}

for (let index = 1; index < 9; index++) {
  const element = document.createElement('button');
  element.innerText = `Button ${index}`;
  buttonsContainer.appendChild(element);
}

setTimeout(() => {
  const element = document.createElement('button');
  element.innerText = `Button ${"NNN"}`;
  buttonsContainer.appendChild(element);
}, 3000);

document.body.addEventListener('click', (event) => {
  if (event.target.matches('button')) {
    buttonClickHandler(parseInt(event.target.innerText));
  }
});

// --------------------------------------------------

const link = document.querySelector('a');
console.log(link);

const doYouKnowTheAnswer = true;

link.addEventListener('click', (event) => {
  console.log("Yeah! We are going to google!");

  if (doYouKnowTheAnswer) {
    console.log("But stop! I know the answer!");
    event.preventDefault();
  }
});

// --------------------------------------------------

let client = new XMLHttpRequest();

client.open("GET", "https://jsonplaceholder.typicode.com/todos");

client.onprogress = function(progressEvent) {
  console.log(progressEvent);
};

client.onloadend = function(progressEvent) {
  console.log(progressEvent);
  console.log(client.response);
};

client.onerror = function(progressEvent) {
  console.log(progressEvent);
};

client.send();
