// // async / await

async function getUser(id) {
  const usersArray = [{id: 1, name: "Bob"}];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundUser = usersArray.find(user => user.id === id);
      foundUser ? resolve(foundUser) : reject('404: Not Found');
    }, 3000);
  });
}

async function main() {
  const result = await getUser(1);
  console.log(123);
  console.log(result);
  // console.log(result.then((res) => res));
}



// ------------------------------------------------------

const button = document.querySelector('button');

button.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('Microtask 1'));
  console.log('Listener 1');
});

button.addEventListener('click', () => {
  Promise.resolve().then(() => console.log('Microtask 2'));
  console.log('Listener 2');
});


// setTimeout(() => button.click(), 1000);

// main();


// ------------------------------------------------------


function findButton(id) {
  if (!id) {
    throw "You better to provide some ID, young man!! 👵";
  }
}

const strangeObject = {
  toPromise: () => {},
};

try {
  strangeObject.toPromice();

  // const span = document.querySelector('span');
  // span.addEventListener('click', () => {});

} catch (error) {
  console.error(Error('Something went wrong'));
} finally {
  console.log('finally');
}

console.log('hello broken world!');
