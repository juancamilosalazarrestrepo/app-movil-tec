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

//get moviles
router.get('/movil',(req,res)=>{
    let sql = 'select * from tb_movil'

    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
});

//get reparaciones
router.get('/reparacion',(req,res)=>{
    let sql = 'select * from tb_reparaciones'

    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
});

//get administrador
router.get('/administrador',(req,res)=>{
    let sql = 'select * from tb_usuarios'

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

// get un movil
router.get('/movil/:id',(req,res)=>{
    const {id}=req.params
    let sql = 'select * from tb_movil where id_movil = ?'
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        
    }
    })
})

// get una reparacion
router.get('/reparacion/:id',(req,res)=>{
    const {id}=req.params
    let sql = 'select * from tb_reparaciones where id_reparaciones = ?'
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        
    }
    })
})

// get una reparacion
router.get('/administrador/:id',(req,res)=>{
    const {id}=req.params
    let sql = 'select * from tb_usuarios where id_user = ?'
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

//agregar movil

router.post('/addMovil/:id',(req,res)=>{
    const{id}=req.params
    

   

    const{id_clientes}=req.body
    console.log(id_clientes*10)
    const{marca}= req.body
    const{modelo}=req.body
    
    
    let sql = `insert into tb_movil(id_clientes, marca, modelo ) values(${id_clientes},'${marca}','${modelo}')`
    conexion.query(sql,(err, rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'movil agregado'})
        }
    })
})

//agregar reparacion

router.post('/addReparacion/',(req,res)=>{
    
    

   

    const{id_movil}=req.body
    
    const{descripcion}=req.body
    
    console.log(id_movil)
    
    let sql = `insert into tb_reparaciones(id_movil, descripcion ) values(${id_movil},'${descripcion}')`
    conexion.query(sql,(err, rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'reparacion agregada'})
        }
    })
})

//Agregar administrador
router.post('/addAdministrador/',(req,res)=>{
    
    

   

    
    
    const{username}=req.body
    const{password_user}=req.body
    const{correo}=req.body
    
    
    
    let sql = `insert into tb_usuarios(username, password_user, correo) values('${username}','${password_user}','${correo}')`
    conexion.query(sql,(err, rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'administrador agregads'})
        }
    })
});

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
}
)
router.get('/login',(req,res)=>{
    let sql = 'select * from tb_usuarios'

    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

router.get('/log/:username',(req,res)=>{
    const {username}=req.params
    let sql = 'select * from tb_usuarios where username = ?'
    conexion.query(sql,[username],(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        
    }
    })
})



module.exports=router;
