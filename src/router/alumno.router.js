const router = require('express').Router();

const Alumnos = require("../model/alumno.model")

// Obtener información

// src/router/alumno.router.js

/**
 * @swagger
 * /api/alumnos:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/

router.get("/", async (req, res) => {
    try {
        const alumnos = await Alumnos.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: alumnos      
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            msg: "Se encontró un error al buscar la información."
        })             
    }
})

router.get("/:rut", async (req, res) => {
    try {
        const rut = req.params.rut;
        const alumno = await Alumnos.findOne({
            where: {
                rut: rut
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            body: alumno      
        });   
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            msg: "Se encontró un error al buscar el alumno."
        })           
    } 
})

// Guardar Información

router.post("/", async (req, res) => {
    const dataAlumno = req.body;
    try {
        const createAlumno = await Alumnos.create({
            rut: dataAlumno.rut,
            dv: dataAlumno.dv,
            nombres: dataAlumno.nombres,
            apellido_paterno: dataAlumno.apellido_paterno,
            apellido_materno: dataAlumno.apellido_materno,
        })
        res.status(200).json({
            ok: true,
            status: 200,
            msg: "Alumno creado correctamente"
        })        
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            msg: "Se encontró un error al crear el alumno. Verifique la información ingresada o puede que el alumno ya exista."
        })         
    }
})

// Actualizar Información

router.put("/:rut", async (req, res) => {
    try {
        const rut = req.params.rut;
        const dataAlumno = req.body;
        const updateAlumno = await Alumnos.update({
            rut: dataAlumno.rut,
            dv: dataAlumno.dv,
            nombres: dataAlumno.nombres,
            apellido_paterno: dataAlumno.apellido_paterno,
            apellido_materno: dataAlumno.apellido_materno,
        },
        {
            where: {
                rut: rut
            }
        })
        res.status(200).json({
            ok: true,
            status: 200,
            msg: updateAlumno
        })        
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            msg: "Se encontró un error al modificar el alumno. Verifique la información ingresada o puede que el alumno no exista."
        })          
    }
})

// Eliminar Información

router.delete("/:rut", async(req, res) => {
    try {
        const rut = req.params.rut;
        const deleteAlumno = await Alumnos.destroy({
            where: {
                rut: rut
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            msg: deleteAlumno   
        });         
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            msg: "Se encontró un error al eliminar el alumno. Verifique la información ingresada o puede que el alumno no exista."
        })            
    }
})

module.exports = router;