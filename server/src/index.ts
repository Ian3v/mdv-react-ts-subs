import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();


//midelwers
app.use(morgan('dev'))
app.use (cors())

app.get( '/', (req,res)=>{
    console.log('Hola app.get');
    res.send('Hola mundo')
})

app.listen( 6505, ()=>{
    console.log('Server activo 👽');
}) 