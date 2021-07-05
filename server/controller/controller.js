var Usersdb = require('../model/model');

exports.create = (req, res) =>{
   if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }
    const user = new Usersdb({
        name: req.body.name,
        age: req.body.age,
        score: req.body.score
    })
    user
        .save(user)
        .then(data=>{
            res.redirect('/score?name='+req.body.name);
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });
}


exports.find=(req,res)=>{
    if(req.query.id){
        var id = req.query.id;
        Usersdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({ message : "Not found user with id "+ id})
            }else{
                console.log(data);
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message: "Error retrieving user with id " + id})
        })
    }else{
        Usersdb.find()
        .then(item =>{
            res.send(item)
        })
        .catch(err => {
            res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
        })
    }
}
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Usersdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}
exports.check= function(req, res) {
    var query = req.params.query;

    Usersdb.find({
        'name': query
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            res.send(result);
        } else {
            res.send(JSON.stringify({
                error : 'Error'
            }))
        }
    })
}

exports.delete = function(req, res)
{
    Usersdb.deleteMany({ score: { $eq: 0 } }).then(function(){
        console.log("Data deleted");
        res.end();
         // Success
    }).catch(function(error){
        console.log(error); // Failure
    });
}
