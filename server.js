import express from 'express';
import http from 'http';
import path from 'path';
//importing Socket.io
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);

const __dirname = path.resolve();

const port = 4500;

// Serve static files from the public folder
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});


server.listen(port, () => {
    console.log(`Server is up and running on PORT: ${port}`);
});


// connecting socket.io
const io = new Server(server);

io.on('connection', (socket) => {
 console.log("Connected...");
})