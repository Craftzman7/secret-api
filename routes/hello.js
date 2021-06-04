module.exports=function(app){
    app.get('/api/hello',function(req,res){
       res.json({hello: `world`, status: `200`});
    })
}