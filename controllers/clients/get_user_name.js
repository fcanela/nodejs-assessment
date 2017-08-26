'use strict'

// services
const getData = require('../../service/get_data')

const getUser = (req, res) => {

    const name = req.params.name
    const url = 'http://www.mocky.io/v2/5808862710000087232b75ac'

    getData('GET', url, true)
    .then( data => {

        res.status(200).send({
            data: data.clients.filter(d => d.name === name),
            user: req.user
        })
        
    })
    .catch( error => {  
        res.status(200).send({
            error: error,
        })
    })
 
}

module.exports = getUser