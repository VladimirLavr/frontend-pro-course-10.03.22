import { createReadStream } from 'fs';
import { createServer } from 'http';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.clear();

const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
];

const sse = (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  res.write("data: testing sse\n");
  res.write("id: 1\n");
  res.write("\n");

  setTimeout(() => {
    res.write("data: hello\n");
    res.write("\n");
  }, 2000);


  setTimeout(() => {
    res.write('event: end-of-stream\n');
    res.write('data: null\n');
    res.write(`id: ${2}\n`);
    res.write(`\n`);
    res.end();
  }, 5000);

};


const httpServer = createServer((req, res) => {
  const url = new URL(`http://${req.headers.host}${req.url}`);

  if (url.pathname === '/sse') {
    sse(req, res);
    return;
  }

  if (url.pathname === "/users") {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(users));
    return;
  }

  if (url.pathname === "/ping") {
    res.statusCode = 200;
    res.end("OK");
    return;
  }

  const fileStream = createReadStream(join(__dirname, "public/index.html"));
  fileStream.pipe(res);
});

httpServer.listen(8080, () => console.log("Server is started on port 8080"));
