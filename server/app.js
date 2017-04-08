import express from 'express';
import bodyParser from 'body-parser';

//* т.к тспльзуется именнованный экспорт
import { serverPort } from './../etc/config.json';
import * as db from './utils/DataBaseUtils';

db.setUpConnection();

const app = express();

//пром. обр для преобразование каждого запроса в json
app.use(bodyParser.json());
// --------------------------------------------------


app.get('/', (req, res)=>{
    res.send('hello crazy');
});

//после получения данных их отправляем... (then)
app.get('/notes', (req, res)=>{
    db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res)=>{
    db.createNote(req.body).then(data =>res.send(data));
});

app.delete('/notes/:id', (req,res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, () =>{
    console.log(`Сервер встал и пошел в зал на порту ${serverPort}`);
    });
