import express from 'express';
import path from "path";

const app = express();
const __dirname = path.resolve();

const port = 4500;



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(port, () => {
    console.log(`Server is up and running on PORT: ${port}`);
})