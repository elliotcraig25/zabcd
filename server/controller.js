module.exports = {
    doesZIDExist: (req, res, next)=>{
        let {movingTo} = req.body
        // console.log(movingTo)
        req.app.get('db').does_z_id_exist(movingTo)
        .then(response=>res.status(200).send(response))
        .catch(err=>{
            res.sendStatus(500)
            console.log(err) 
        })
    },
    createNewRow: (req, res, next)=>{
        let {newZID} = req.body
        console.log(`this is movingTo`, newZID)
        req.app.get('db').insert_new_row(newZID)
        .then(response=>res.sendStatus(200))
        .catch(err=>{
            res.sendStatus(500)
            console.log(err) 
        })
    },
    editA: (req, res, next)=>{
        let {text, z_id} = req.body
        console.log(text)
        console.log(z_id)
        req.app.get('db').edit_za([text, z_id])
        .then(response=>res.sendStatus(200))
        .catch(err=>{
            res.sendStatus(500)
            console.log(err)
        })
    },
    editB: (req, res, next)=>{
        let {text, z_id} = req.body
        console.log(text)
        console.log(z_id)
        req.app.get('db').edit_zb([text, z_id])
        .then(response=>res.sendStatus(200))
        .catch(err=>{
            res.sendStatus(500)
            console.log(err) 
        })
    },
    editC: (req, res, next)=>{
        let {text, z_id} = req.body
        console.log(text)
        console.log(z_id)
        req.app.get('db').edit_zc([text, z_id])
        .then(response=>res.sendStatus(200))
        .catch(err=>{
            res.sendStatus(500)
            console.log(err) 
        })
    },
    editD: (req, res, next)=>{
        let {text, z_id} = req.body
        console.log(text)
        console.log(z_id)
        req.app.get('db').edit_zd([text, z_id])
        .then(response=>res.sendStatus(200))
        .catch(err=>{
            res.sendStatus(500)
            console.log(err) 
        })
    },
    getZA: (req, res, next)=>{
        let {z_cur} = req.body
        // console.log(z_cur)
        req.app.get('db').get_z_a(z_cur)
        .then(response=>res.status(200).send(response))
        .catch(err=>{
            res.sendStatus(500)
            console.log(err) 
        })
    },
    getZB: (req, res, next)=>{
        let {z_cur} = req.body
        // console.log(z_cur)
        req.app.get('db').get_z_b(z_cur)
        .then(response=>res.status(200).send(response))
        .catch(err=>{
            res.sendStatus(500)
            console.log(err) 
        })
    },
    getZC: (req, res, next)=>{
        let {z_cur} = req.body
        // console.log(z_cur)
        req.app.get('db').get_z_c(z_cur)
        .then(response=>res.status(200).send(response))
        .catch(err=>{
            res.sendStatus(500)
            console.log(err) 
        })
    },
    getZD: (req, res, next)=>{
        let {z_cur} = req.body
        // console.log(z_cur)
        req.app.get('db').get_z_d(z_cur)
        .then(response=>res.status(200).send(response))
        .catch(err=>{
            res.sendStatus(500)
            console.log(err) 
        })
    },
    getZAll: (req, res, next)=>{
        
    }
}