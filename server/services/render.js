const axios = require('axios');

exports.homeRoutes = (req, res) =>{
    res.render('index');
}
exports.score = (req, res) =>{
    //res.render('score');
    axios.get('http://localhost:3000/find/'+req.query.name)
        .then(function(userdata){
            var val = userdata.data;
            var newStr = val[0];
            res.render("score", {users : newStr})
            console.log(newStr);
        })
        .catch(err =>{
            res.send(err);
        })
}
exports.scoreboard = function (req, res) {
    //res.render('scoreboard');
    // axios.get('http://localhost:3000/api/users')
    //     .then((response)=>{
    //         var datas=response.data;
    //         datas.sort((a,b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0));
    //         res.render('scoreboard',{items : datas})
            
    //     })
    //     .catch(err =>{
    //         res.send(err);
    //     })

        let one ="http://localhost:3000/api/delete";
        let two = "http://localhost:3000/api/users";
  axios.delete(one)
  .then((res) => {
    console.log("Completed Deletion");
    return axios.get(two);
  })
  .then((resp) => {
    var datas=resp.data;
        datas.sort((a,b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0));
        res.render('scoreboard',{items : datas});
  })
  .catch((err) => {
    console.error(err);
  });





    }
