module.exports = {
    doesZIDExist: (req, res, next)=>{
        let {movingTo} = req.body
        console.log(movingTo)
        req.app.get('db').does_z_id_exist(movingTo)
        .then(response=>res.status(200).send(response))
        .catch(err=>{
            res.sendStatus(500)
            console.log(err) 
        })
    },
    getZA: (req, res, next)=>{
        let {z_cur} = req.body
        console.log(z_cur)
        req.app.get('db').get_z_a(z_cur)
        .then(response=>res.status(200).send(response))
        .catch(err=>{
            res.sendStatus(500)
            console.log(err) 
        })
    },
    getZB: (req, res, next)=>{
        let {z_cur} = req.body
        console.log(z_cur)
        req.app.get('db').get_z_b(z_cur)
        .then(response=>res.status(200).send(response))
        .catch(err=>{
            res.sendStatus(500)
            console.log(err) 
        })
    },
    getZC: (req, res, next)=>{
        let {z_cur} = req.body
        console.log(z_cur)
        req.app.get('db').get_z_c(z_cur)
        .then(response=>res.status(200).send(response))
        .catch(err=>{
            res.sendStatus(500)
            console.log(err) 
        })
    },
    getZD: (req, res, next)=>{
        let {z_cur} = req.body
        console.log(z_cur)
        req.app.get('db').get_z_d(z_cur)
        .then(response=>res.status(200).send(response))
        .catch(err=>{
            res.sendStatus(500)
            console.log(err) 
        })
    }
}