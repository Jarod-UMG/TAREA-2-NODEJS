import express  from "express" 
import { crud_estudiante } from "./controlador/crud_estudiantes.js"
import { crud_tipo_sangre } from "./controlador/crud_tipos_sangre.js"

const app_e = express() 
app_e.use(express.urlencoded({extended:false}));
app_e.use(express.json());

app_e.use(express.static('./vistas'))
app_e.use(express.static('./controlador'))
app_e.use(express.static('./modelo'))

app_e.set('views','./vistas')
app_e.set('view engine','ejs')

app_e.listen('5000',function(){
    console.log('Aplicacion Iniciada : http://localhost:5000/')
})

//GET y POST para estudiantes
app_e.get('/',crud_estudiante.leer);
app_e.post('/crud_e',crud_estudiante.cud);

//GET y POST para tipos de sangre
app_e.get('/Tipos_Sangre',crud_tipo_sangre.leer);
app_e.post('/crud_ts',crud_tipo_sangre.cud);