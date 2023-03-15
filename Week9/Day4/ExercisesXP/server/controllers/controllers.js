const {pictures} = require('../modules/modules.js');


const _pictures = (req,res) => {
    pictures(req.params.category)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports  = {_pictures};