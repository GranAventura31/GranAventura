// const Router  = require('express')
const express = require('express')
// const connection = require('express-myconnection')
const routes = express.Router()
const nodemailer = require('nodemailer')
const crypto = require('crypto')

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
routes.post('/ActualizarContrasena', async(req, res) => {
    const generateRandom = () => {
    const password = crypto.randomBytes(4).toString('hex');
    return password;
}

    const correo = req.body.Correo;
    let contrasenaNueva = String(generateRandom());

    let config ={
    host : 'smtp.gmail.com',
    port : 587,
    auth : {
        user: 'granaventura86@gmail.com',
        pass: 'vyaofmvtkmnvlzoc'
    }
    }
    let mensaje = {
        from : 'granaventura@gmail.com',
        to : correo,
        subject : 'Correo de pueba',
        text : '¿Hola, has olvidado tu contraseña? \nPara ingresar a tu cuenta deberas usar esta contraseña: '+contrasenaNueva+' Cuando ingreses no olvides cambiar tu contraseña a una nueva contraseña que no olvides'
    }

    const transport = nodemailer.createTransport(config);

    const info = await transport.sendMail(mensaje);

    console.log(info);

    req.getConnection((err,conn) =>{
        if (err) return res.send(err)
        conn.query('UPDATE registro set Contrasena = ? WHERE Correo = ?',[contrasenaNueva,correo], (err, rows) => {
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

