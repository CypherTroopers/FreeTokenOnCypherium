import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/abi', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'CRC20.abi'));
});


app.get('/bytecode', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'CRC20.bin'));
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
