import express from 'express';
import bodyParser from 'body-parser';

//* т.к тспльзуется именнованный экспорт
import * as db from './utils/DataBaseUtils';

db.setUpConnection();

const app = express();

//пром. обр для преобразование каждого запроса в json
app.use(bodyParser.json());



app.get('/notes', (req, res)=>{
    res.send('hello crazy');
});

app.post('/notes', (req, res)=>{

});

app.delete('/notes/:id', (req,res) => {

});

const server = app.listen(8081, () =>{
    console.log('Сервер встал и пошел в зал на порту 8081');
    });
