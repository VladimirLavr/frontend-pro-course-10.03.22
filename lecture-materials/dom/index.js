console.log(`Hello, ${this.document.nodeName}`);

// 'taxi-arrived': do something (e.g. show notification, play sound of arrival)
// 'taxi-canceled': do something (e.g. retry)

const p = document.querySelector('.simple-text');

const testInput = document.getElementById('test');

const handler = () => {
  console.log('Hola!');
};

p.addEventListener('click', handler);

setTimeout(() => p.removeEventListener('click', handler), 5000);

console.dir(p);

p.addEventListener('mousedown', (event) => {
  console.log(event);
});


testInput.addEventListener('change', (event) => {
  console.log(event);
});


document.addEventListener('keydown', (event) => {
  null.toString(); // remove it 'cause it's will break the page
});


window.addEventListener('error', (error) => {
  console.log(error);
});
