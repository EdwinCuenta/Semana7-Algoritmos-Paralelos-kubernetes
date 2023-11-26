const express = require('express')
const functions = require('./project1')
const app = express()



app.get('/secuencial/:uid', (req, res) => {

    let arr = [];
    while(arr.length < 20){
        let r = Math.floor(Math.random() * 31);
        if(arr.indexOf(r) === -1) arr.push(r);
    }

    const wanted=req.params.uid
    const resul = functions.searchLinear(arr,wanted)
    
    if(resul ==-1)
    {
        res.send('<h1> Arreglo:['+ arr +']</h1>  <br> <h2>No se encontro el valor en la busqueda secuencial</h2>')
    }
    
    res.send(' <h1> Arreglo:['+ arr +']</h1>  <br> <h2>valor encontrado en la posicion: '+resul+'</h2>')

});



app.get('/', (req, res) => {

    let arr = [];
    while(arr.length < 20){
        let r = Math.floor(Math.random() * 31);
        if(arr.indexOf(r) === -1) arr.push(r);
    }

  const wanted=req.params.uid
  const resul = functions.searchLinear(arr,wanted)
  
  if(resul ==-1)
  {
      res.send('<h1>Sin resultados</h1>')
  }
  
  res.send('<h1>valor encontrado en la posicion: '+resul+'</h1>')

});




app.get('/salto/:uid', (req,res)=>{

    let arr = [];
    while(arr.length < 20){
        let r = Math.floor(Math.random() * 31);
        if(arr.indexOf(r) === -1) arr.push(r);
    }


    const wanted = req.params.uid
    const arrOrder = functions.sortBubbleLi(arr);
    const resul = functions.searchJump(arrOrder,wanted)

    if(resul.pos ==-1)
    {
        res.send('<h1>Arreglo Ordenado: ['+arrOrder+']</h1> <br> <h2>Valor no encontrado en la busqueda por saltos</h2>')
    }

    res.send('<h1>Arreglo Ordenado: ['+arrOrder+']</h1> <br> <h2>valor encontrado en la posicion: '+resul.pos+'</h2>')
    // res.send('<h1>Arreglo Ordenado: ['+arrOrder+']</h1>\n'+'<h2>valor encontrado en la posicion: '+resul.pos+' tiempo:'+resul.time+'</h2>')
})


app.listen(3002,()=>{

    console.log('api runing ...')
  
})