// Solutions
// 1. Timeout ❌
// 2. Callbacks 😺


sendRequestToServer('/todos', null, (response) => {
  console.log(response.body.todos);
});
