import { conectar } from "../modelo/db_conectar.js";

var crud_tipo_sangre =({});
crud_tipo_sangre.leer = (req,res)=>{

    conectar.query('SELECT tipos_sangre.id_tipo_sangre, tipos_sangre.sangre FROM tipos_sangre;',(error,results)=>{
        if (error){
            throw error;

    }else{
    res.render('ruta/Tipos_Sangre',{resultado:results})
    }
})
};

crud_tipo_sangre.cud = (req,res)=>{
    const btn_crear = req.body.btn_crear;
    const btn_actualizar = req.body.btn_actualizar;
    const btn_borrar = req.body.btn_borrar;
    const id = req.body.txt_id;
    const sangre = req.body.txt_ts;
  
    if (btn_crear){
        conectar.query('insert into tipos_sangre SET ?',{sangre:sangre}, (error, results)=>{
            if(error){
                console.log(error);
            }else{
                res.redirect('/Tipos_Sangre');         
            }
        });
       
    }
    if (btn_actualizar){
        conectar.query('update tipos_sangre SET ? where id_tipo_sangre = ?',[{sangre:sangre},id], (error, results)=>{
            if(error){
                console.log(error);
            }else{   
                res.redirect('/Tipos_Sangre');         
            }
        });
       
    }
    if (btn_borrar){
        conectar.query('delete from tipos_sangre where id_tipo_sangre = ?',[id], (error, results)=>{
            if(error){
                console.log(error);
            }else{   
                res.redirect('/Tipos_Sangre');         
            }
        });
       
    }
     
};

export {crud_tipo_sangre}
