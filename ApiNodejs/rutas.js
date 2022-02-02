const router = require('express').Router()
const { Router } = require('express');
const conexion= require('./config/conexion')



//asignamos todas las rutas
//get clientes

router.get('/',(req,res)=>{
    let sql = 'select * from tb_clientes'

    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
});


// get un equipo

router.get('/:id',(req,res)=>{
    const {id}=req.params
    let sql = 'select * from tb_clientes where id_clientes = ?'
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        
    }
    })
})

//agregar equipo

router.post('/',(req,res)=>{
    const{nombre}= req.body
    const{telefono}=req.body
    const{correo}=req.body
    const{cedula}=req.body
    let sql = `insert into tb_clientes(nombre, telefono, correo, cedula) values('${nombre}','${telefono}','${correo}','${cedula}')`
    conexion.query(sql,(err, rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'cliente agregado'})
        }
    })
})

//eliminar

router.delete('/:id',(req,res)=>{
    const{id}=req.params
    let sql = `delete from tb_clientes where id_clientes = '${id}'`
    conexion.query(sql,(err, rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo eliminado'})
        }
    })



});


//modificar

router.put('/:id',(req,res)=>{
    const{id}=req.params
    const{nombre, telefono, correo, cedula} = req.body
    let sql =`update tb_clientes set
    nombre ='${nombre}',
    telefono ='${telefono}',
    correo ='${correo}',
    cedula ='${cedula}'
    where id_clientes = '${id}'`

    conexion.query(sql, (err, rows,fields)=>{
        if(err) throw err
        else{
            res.json({status:'cliente modificado'})
        }
    })
})

module.exports=router;
