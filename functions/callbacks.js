const server = function(data, callback) {
  console.log(`server received ${data}.`);  

  setTimeout(() => {
    callback(`200 OK`);
  }, 3000);
}

const sendRequest = function(data, callback) {
  const preparedData = JSON.stringify(data);
  server(preparedData, (response) => {
    callback(`client received response: ${parseInt(response) === 200 ? "Everything is good" : 
"Something went wrong :("}`);
  });
}

sendRequest({name: "Andrii", age: 25}, (response) => {
  console.log(response);
});
