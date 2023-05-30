const router = require('express').Router();

const Carreras = require("../model/carrera.model")

// Obtener información

router.get("/", async (req, res) => {
    try {
        const carreras = await Carreras.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: carreras      
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            msg: "Se encontró un error al buscar la información."
        })             
    }
})

router.get("/:codigo", async (req, res) => {
    try {
        const codigo = req.params.codigo;
        const carreras = await Carreras.findOne({
            where: {
                codigo: codigo
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            body: carreras      
        });   
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            msg: "Se encontró un error al buscar la carreras."
        })           
    } 
})

// Guardar Información

router.post("/", async (req, res) => {
    const dataCarrera = req.body;
    try {
        const createCarrera = await Carreras.create({
            codigo: dataCarrera.codigo,
            nombre: dataCarrera.nombre
        })
        res.status(200).json({
            ok: true,
            status: 200,
            msg: "Carrera creada correctamente"
        })        
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            msg: "Se encontró un error al crear la carrera. Verifique la información ingresada o puede que la carrera ya exista."
        })         
    }
})

// Actualizar Información

router.put("/:codigo", async (req, res) => {
    try {
        const codigo = req.params.codigo;
        const dataCarrera = req.body;
        const updateCarrera = await Carreras.update({
            codigo: dataCarrera.codigo,
            nombre: dataCarrera.nombre
        },
        {
            where: {
                codigo: codigo
            }
        })
        res.status(200).json({
            ok: true,
            status: 200,
            msg: "Carrera actualizada correctamente"
        })        
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            msg: "Se encontró un error al modificar la carrera. Verifique la información ingresada o puede que el alumno no exista."
        })          
    }
})

// Eliminar Información

router.delete("/:codigo", async(req, res) => {
    try {
        const codigo = req.params.codigo;
        const deleteCarrera = await Carreras.destroy({
            where: {
                codigo: codigo
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            msg: "Carrera eliminada correctamente"
        });         
    } catch (error) {
        res.status(500).json({
            ok: false,
            status: 500,
            msg: "Se encontró un error al eliminar la carrera. Verifique la información ingresada o puede que la carrera no exista."
        })            
    }
})

module.exports = router;