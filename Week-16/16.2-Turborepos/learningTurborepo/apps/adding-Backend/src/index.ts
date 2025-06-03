import express from 'express';
import { BACKEND_URL } from '@repo/common';
const app = express();

app.get('/', (req, res) => {
    res.send(BACKEND_URL);
}
);

 app.listen(3002, () => {
    console.log('Server is running on http://localhost:3002');
 })
