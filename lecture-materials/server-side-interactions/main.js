const xhr = new XMLHttpRequest();
xhr.open("GET", "https://itsdorosh.github.io", false);
xhr.onload = () => console.log(xhr.status === 200 ? xhr.response : xhr.status)
xhr.onreadystatechange = () => {
	// Value	State	Description
	// 0	UNSENT	Client has been created. open() not called yet.
	// 1	OPENED	open() has been called.
	// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
	// 3	LOADING	Downloading; responseText holds partial data.
	// 4	DONE	The operation is complete.
}
xhr.send();
xhr.onprogress = () => {}
xhr.onerror = () => {}
xhr.onsuccess = () => {}

const json = {
  name: "Andrii",
  age: 25,
  role: "FE"
};

xhr.open("POST", '/submit', true);
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
// Отсылаем объект в формате JSON и с Content-Type application/json
// Сервер должен уметь такой Content-Type принимать и раскодировать
xhr.send(JSON.stringify(json));
