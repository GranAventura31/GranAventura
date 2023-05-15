// const Router  = require('express')
const express = require('express')
// const connection = require('express-myconnection')
const routes = express.Router()

routes.get('/', (req, res) => {
    req.getConnection((err,conn) =>{
        if (err) return res.send(err)

        conn.query('SELECT * FROM registro', (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.get('/Login', (req, res) => {
    const correo = req.body.correo;
    const contrasena = req.body.contrasena;
    req.getConnection((err,conn) =>{
        if (err) return res.send(err)

        conn.query('SELECT * FROM registro WHERE Correo = ? AND Contrasena = ?',[correo,contrasena], (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

// routes.post('/Register', (req, res) => {

//     const nombre = req.body.nombre;
//     const correo = req.body.correo;
//     const contrasena = req.body.contrasena;
//     const telefono = req.body.telefono;
//     const rol = req.body.rol="Usuario";
//     req.getConnection((err,conn) =>{
//         if (err) return res.send(err)
//         conn.query('insert into registro (Nombre, Correo, Contrasena, Rol,Telefono) values (?,?,?,?,?)',[nombre,correo,contrasena,rol,telefono], (err, rows) => {
//             if(err) return res.send(err)

//             res.send({'response':'User Inserted'})
//         })
//     })
// })
routes.post('/Register', (req, res) => {

    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const contrasena = req.body.contrasena;
    const rol = req.body.rol="Usuario";
    const telefono = req.body.telefono;
    req.getConnection((err,conn) =>{
        if (err) return res.send(err)
        conn.query('CALL RegistrarUsuario(?,?,?,?,?)',[nombre,correo,contrasena,rol,telefono], (err, rows) => {
            if(err) return res.send(err)

            res.send({'response':'User Inserted'})
        })
    })
})

routes.delete('/:id', (req, res) => {
    req.getConnection((err,conn) =>{
        if (err) return res.send(err)
        
        conn.query('delete from registro where contrasena = ?',[req.params.id], (err, rows) => {
            if(err) return res.send(err)

            res.send({'response':'User excluded'})
        })
    })
})

routes.put('/:id', (req, res) => {
    req.getConnection((err,conn) =>{
        if (err) return res.send(err)
        
        conn.query('UPDATE registro set ? where Contrasena = ?',[req.body,req.params.id], (err, rows) => {
            if(err) return res.send(err)

            res.send({'response':'User updated'})
        })
    })
})

module.exports = routes

