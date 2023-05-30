const router = require('express').Router();
const { Op } = require("sequelize");

const AlumnoCarrera = require("../model/alumno_carrera.model")

// Obtener información

router.get("/", async (req, res) => {
    try {
        const alumnosCarrera = await AlumnoCarrera.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: alumnosCarrera      
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            msg: "Se encontró un error al buscar la información."
        })             
    }
})

router.get("/:rut/:codigo", async (req, res) => {
    try {
        const rut = req.params.rut;
        const codigo = req.params.codigo;
        const alumnosCarrera = await AlumnoCarrera.findOne({
            where: {
                [Op.and]: [
                    { rut: rut },
                    { codigo: codigo }
                ]
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            body: alumnosCarrera      
        });   
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            msg: "Se encontró un error al buscar la información indicada."
        })           
    } 
})

// Guardar Información

router.post("/", async (req, res) => {
    const dataAlumnoCarrera = req.body;
    try {
        const createAlumnoCarrera = await AlumnoCarrera.create({
            rut: dataAlumnoCarrera.rut,
            codigo: dataAlumnoCarrera.codigo,
            fecha_inicio: dataAlumnoCarrera.fecha_inicio,
            fecha_final: dataAlumnoCarrera.fecha_final
        })
        res.status(200).json({
            ok: true,
            status: 200,
            msg: "Enlace alumno-carrera creado correctamente"
        })        
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            msg: "Se encontró un error al guardar la información. Verifique la información ingresada."
        })         
    }
})

// Actualizar Información

router.put("/:rut/:codigo", async (req, res) => {
    try {
        const rut = req.params.rut;
        const codigo = req.params.codigo;
        const dataAlumnoCarrera = req.body;
        const updateAlumnoCarrera = await AlumnoCarrera.update({
            rut: dataAlumnoCarrera.rut,
            codigo: dataAlumnoCarrera.codigo,
            fecha_inicio: dataAlumnoCarrera.fecha_inicio,
            fecha_final: dataAlumnoCarrera.fecha_final
        },
        {
            where: {
                [Op.and]: [
                    { rut: rut },
                    { codigo: codigo }
                ]
            }
        })
        res.status(200).json({
            ok: true,
            status: 200,
            msg: updateAlumnoCarrera
        })        
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            msg: error
        })          
    }
})

// Eliminar Información

router.delete("/:rut/:codigo", async(req, res) => {
    try {
        const rut = req.params.rut;
        const codigo = req.params.codigo;
        const deleteAlumnoCarrera = await AlumnoCarrera.destroy({
            where: {
                [Op.and]: [
                    { rut: rut },
                    { codigo: codigo }
                ]
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            msg: deleteAlumnoCarrera   
        });         
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            msg: "Se encontró un error al eliminar la información. Verifique la información ingresada."
        })            
    }
})

module.exports = router;