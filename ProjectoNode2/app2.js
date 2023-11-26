const express = require('express')
const functions = require('./project2')
const app = express()


const arrElements=[4,2,3,1,5,6,7,8,10,9,11,12,15,14,13]


app.get('/binaria/:uid', (req, res) => {
    
    const wanted=req.params.uid
    const ordenada = functions.sortBubble(arrElements)
    const resul = functions.searchBinary(ordenada,Number(wanted))
    
    if(resul == -1)
    {
        res.send('<h1>Binaria-Valor no encontrado</h1>')
    }
    
    res.send('<h1>Binaria-valor encontrado/n Posicion</h1>'+resul)

});



app.get('/burbuja', (req, res) => {
  const resul = functions.sortBubble(arrElements);

  if (resul.pos == -1) {
      res.send('<h1>Burbuja-Valor no encontrado</h1>');
  }

  res.send('<h1>Burbuja-valores ordenados: ' + resul + '</h1>\n');
});



app.listen(3001,()=>{

    console.log('api runing ...')
  
})