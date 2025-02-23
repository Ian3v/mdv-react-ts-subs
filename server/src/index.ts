import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import {Client} from 'pg'
import { Request, Response } from 'express';

// OBJETIVE
[
    {
      nick: 'Carmen',
      subMonths: 3,
      avatar: 'https://i.pravatar.cc/150?u=dapelu',
      description: 'Daleu hacce moredador a veces deleniti eius qui Eligendi nam suscipit ut dolorem molestiae eum. Neque vero adipisci culpa. Voluptas provident animi velit nulla in modi. Inventore labore ipsam. Voluptates quia ab earum.'
    },
    {
      nick:'sergio_serrano',
      subMonths: 7,
      avatar:'https://i.pravatar.cc/150?u=sergio_serrano',
    }
  ]

  console.log("====================>>>>")

const app = express();


//midelwers
app.use(morgan('dev'))
app.use (cors())

const client = new Client({
    host: "localhost",
    database: "mdv_react-ts-subs",
    user: "postgres",
    password: "root",
  });

const PORT:number =6505

app.use(express.json());

client
  .connect()
  .then(() => console.log("Conectado a la base de datos 👽"))
  .catch((err:any) => console.error("Error al conectar a la base de datos", err));


app.get( '/', (req,res)=>{
    console.log('Hola app.get');
    res.send('Hola mundo')
})


app.get('/users', async (req:Request, res:Response)=>{

    

    try{

        const result = await client.query('SELECT * FROM users;');
        
        //Mapeamos y devolvemos el nuevo formato
        const formatoUsers = 
        result.rows.map( (element, index)=>{
          return {
            nick:element.nick,
            months:element.submonths,
            profileUrl: element.avatar,
            description: element.description
          }
        })

        res.json(formatoUsers);
    }catch(err){
        res.status(500).send("Error en el servidor"); // Manejo de errores

    }
})


app.listen( PORT, ()=>{
    console.log('Server activo 👽',`http://localhost:6505`);
}) 
