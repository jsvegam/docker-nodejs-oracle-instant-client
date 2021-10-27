const { getData } = require('../models/object');

const data = async(req, res) => {

    try {
        console.log("llego");

            result = await getData();
            if(!result.rows[0].NOW){
                throw new Error('Correo no se encuentra asociado a ningún rut en banner')
            }
            result = result.rows[0].NOW;


        return res.status(200).json({Data:{
            Now:result
        }});



    } catch (error){
        return res.status(500).json({message:error.message})
    }
}

module.exports = { data }