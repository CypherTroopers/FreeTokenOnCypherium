import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// index.html を提供
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ABI を提供
app.get('/abi', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'CRC20.abi'));
});

// バイトコードを提供
app.get('/bytecode', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'CRC20.bin'));
});

// サーバー起動
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
