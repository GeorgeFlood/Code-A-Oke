import express from 'express';
import expressWs from 'express-ws';

const app = express();
const { ws } = expressWs(app);

app.ws('/echo', function (ws, req) {
  // THIS LINE runs when a client connects
 ws.on('message', function (msg) {
  console.log('Message from browser:', msg);
 })
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

export default app;
