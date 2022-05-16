function imitateAsync(callback) {
  const timeout = Math.random() * 2000 + 500;
  console.warn(timeout);
  setTimeout(callback, timeout);
}

function sendRequestToServer(url, params, callback) {
  const response = { status: 0, body: {} }; // 200 & 404

  switch (url) {
    case '/todos': {
      imitateAsync(() => {
        response.status = 200;
        response.body.todos = [
          { title: "Запостить домашки в группу по фронту", completed: false },
          { title: "Вынести мусор", completed: false },
        ];

        callback(response);
      });
      break;
    }

    default: {
      imitateAsync(() => {
        response.status = 404;
        response.body.message = "Content not found";
        callback(response);
      });
    }
  }
}
