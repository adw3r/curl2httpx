import express from 'express';
import cors from 'cors';
import { toPython } from 'curlconverter';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


// нужно, чтобы корректно работать с __dirname в ES-модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// отдаём статику (js, css и т.д.)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

// GET /
app.get('/', (req, res) => {
    console.log(req)
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/convert', (req, res) => {
    const { curl: curlString } = req.body;
    if (!curlString) {
        return res.status(400).json({ error: 'Missing curl field in request body' });
    }

    try {
        const pythonCode = toPython(curlString);
        res.set('Content-Type', 'text/plain');
        res.send(pythonCode.replaceAll('requests', 'httpx'));
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
