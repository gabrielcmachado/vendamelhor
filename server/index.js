import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.send('Bem vindo a API VendaMelhor você precisa estar autenticado para utilizar os recursos desta API')
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})