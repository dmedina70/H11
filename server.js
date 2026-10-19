import express from 'express';
import SimpleMessage from './controller/SimpleMessage.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', SimpleMessage);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});