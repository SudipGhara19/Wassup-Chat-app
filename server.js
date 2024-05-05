import express from 'express';
import path from 'path';

const app = express();

const __dirname = path.resolve();

const port = 4500;

// Serve static files from the public folder
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(port, () => {
    console.log(`Server is up and running on PORT: ${port}`);
});