const {hello, world} = require('../modules/modules.js');


  const _hello = (req, res) => {
      res.json('Hello from Express')
  }

  const _world = (req,res) => {
    res.json(`I received your POST request. This is what you sent me:
    Firstname: ${req.body.firstname}
    Lastname: ${req.body.lastname}`)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err);
    })
}


module.exports  = {_hello, _world}