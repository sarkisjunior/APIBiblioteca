import  express  from "express";
import router from "./routes";
import pool from "./config/database";

pool.connect(function(err) {
    if(err){
        console.log(err);        
    } else {
        console.log('Conectado ao bando de dadods!');        
    }
})

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())
app.use(router);

app.listen(port, ()=> console.log(`Servidor iniciado na porta http://localhost:${port}`))