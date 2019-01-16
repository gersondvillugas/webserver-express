var express=require('express');
var app=express();
const hbs = require('hbs');
require('./hbs/helpers')
const port =process.env.PORT || 3000;
app.use(express.static(__dirname +'/public'));
hbs.registerPartials(__dirname +'/views/parciales');
//EXPRESS HBS engine
app.set('view engine', 'hbs');
//helpers
hbs.registerHelper('getAnio',()=>{
    return new Date().getFullYear();
});
app.get('/',(req,res)=>{
    //res.send('Hello world')
    
    res.render('home',{
        nombre:'Fernando'
     
    });  
});
app.get('/about',(req,res)=>{
    //res.send('Hello world')
    
    res.render('about',{
        
       
    }); 
});
/*app.get('/data',(req,res)=>{
    //res.send('Hello world')  
   
    res.send("hola ,mundo");
});*/
app.listen(port,()=>
{ 
  console.log( `escuchando en el puerto ${port}`)
}    );
