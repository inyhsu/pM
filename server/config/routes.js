var products = require('../controllers/products.js');
var path = require('path');

module.exports = function(app){

    app.get('/product', function(req,res){
        products.viewAll(req, res);
    })

    app.post('/product', function(req,res){
        products.create(req, res);
    })
        
    app.get('/product/:id', function(req,res){
        products.viewOne(req, res);
    })

    app.patch('/product/:id', function(req,res){
        products.update(req, res);
    })

    app.delete('/product/:id',function(req, res){
        products.delete(req,res)
    })
    
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve('./client/dist/index.html'))
    })
}