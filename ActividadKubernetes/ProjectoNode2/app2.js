const express = require('express')
const functions = require('./project2')
const app = express()



app.get('/binaria/:uid', (req, res) => {
    // arreglo con 20 posiciones de 0 a 30, sin que se repitan los numeros
    let arr = [];
    while(arr.length < 20){
        let r = Math.floor(Math.random() * 31);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    
    const wanted=req.params.uid
    const ordenada = functions.sortBubble(arr)
    const resul = functions.searchBinary(ordenada,Number(wanted))
    
    if(resul == -1)
    {
        res.send(' <h1>Arreglo: ['+arr +']</h1> <br> <h2>no se encontro el valor en la busqueda binaria</h2>')
    }
    
    res.send('<h1>Arreglo: ['+arr+']</h1> <br> <h2>Se encontro el valor en Posicion '+resul+'</h2>')

});



app.get('/burbuja', (req, res) => {
    let arr = [];
    while(arr.length < 20){
        let r = Math.floor(Math.random() * 31);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    
    const resul = functions.sortBubble(arr);

    if (resul.pos == -1) {
        res.send('<h1>Metodo Burbuja: ['+arr+'] </h1> <br> <h2>No se encontro el valor</h2>');
    }

    //   res.send('<h1>Metodo Burbuja:valores ordenados: ' + resul + '</h1>\n');
    res.send('<h1>Metodo Burbuja:Arreglo original: ['+arr+']</h1>  <br> <h2> Arrego ordenado:['+resul+']</h2>\n');
});



app.listen(3001,()=>{

    console.log('api runing ...')
  
})