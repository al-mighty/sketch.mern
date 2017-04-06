import express from 'express';

const app = express();

const server = app.listen(8081, () =>{
    console.log('Сервер встал и пошел в зал на порту 8081');
    });