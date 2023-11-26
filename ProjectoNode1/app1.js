const express = require('express')
const functions = require('./project1')
const app = express()


const arrElements=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


app.get('/secuencial/:uid', (req, res) => {
    const wanted=req.params.uid
    const resul = functions.searchLinear(arrElements,wanted)
    
    if(resul ==-1)
    {
        res.send('<h1>Valor no encontrado</h1>')
    }
    
    res.send('<h1>valor encontrado en la posicion: '+resul+'</h1>')

});

app.get('/', (req, res) => {
  const wanted=req.params.uid
  const resul = functions.searchLinear(arrElements,wanted)
  
  if(resul ==-1)
  {
      res.send('<h1>Valor no encontrado</h1>')
  }
  
  res.send('<h1>valor encontrado en la posicion: '+resul+'</h1>')

});




app.get('/jumpSearch/:uid', (req,res)=>{
    const wanted = req.params.uid
    const resul = functions.searchJump(arrElements,wanted)

    if(resul.pos ==-1)
    {
        res.send('<h1>Valor no encontrado</h1>')
    }

    res.send('<h1>valor encontrado en la posicion: '+resul.pos+'</h1>\n'+'<h2>tiempo:'+resul.time+'</h2>')
})


app.listen(3002,()=>{

    console.log('api runing ...')
  
})