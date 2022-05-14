console.log(1);
console.log(2);
console.time('cpu for setTimeout:');
setTimeout(() => {
    console.timeEnd('cpu for setTimeout:');
}, 1000);
console.log(4);

// -------------------------------------------


function one() {
    two();
}

function two() {
    three();
}

function three() {
    console.log(123);
}

one();

// -------------------------------------------

function callback() {
    callback();
}

// callback();

// -------------------------------------------

console.time('before for');
// for (let index = 0; index < 2000000000; index++) {}
console.timeEnd('before for');
console.log(5);

document.addEventListener('click', (event) => {
    console.log(12345);
});


window.addEventListener('load', () => {
    console.log(test);
});

