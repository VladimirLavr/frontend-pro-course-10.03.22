const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = (event) => {
//   console.log(event.currentTarget.readyState);
// 	// Value	State	Description
// 	// 0	UNSENT	Client has been created. open() not called yet.
// 	// 1	OPENED	open() has been called.
// 	// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 	// 3	LOADING	Downloading; responseText holds partial data.
// 	// 4	DONE	The operation is complete.
// }

// // xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/");
// // xhr.onload = () => console.log(xhr.status === 200 ? xhr.response : xhr.status);
// // xhr.send();


const personConfig = {
  name: "Andrii",
  age: 25,
  role: "FE"
};

// xhr.open("POST", 'https://jsonplaceholder.typicode.com/posts', true);
// xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
// xhr.onload = () => console.log(xhr.status === 201 ? xhr.response : xhr.status);
// // Отсылаем объект в формате JSON и с Content-Type application/json
// // Сервер должен уметь такой Content-Type принимать и раскодировать
// xhr.send(JSON.stringify(json));


// -----

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: "POST",
  headers: {
    'Content-type': 'application/json; charset=utf-8'
  },
  body: JSON.stringify(personConfig),
})
  .then((response) => response.json())
  .then(res => console.log(res));
