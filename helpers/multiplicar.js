require ('colors');
const fs = require('fs'); 
const { resolve } = require('path');


const crearArchivo = (base = 5, listar=true, amount=10) =>{
    return new Promise( (resolve, reject) => {
        let salida = '';
      
        for(let i = 1; i <= amount; i++){
            salida += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }  
        
        if(listar)
       { console.log("=================================".blue);
        console.log(`      Tabla del: ${base.blue}`);
        console.log("=================================".blue);
        console.log(salida);}
        
    
        fs.writeFileSync(`tabla-${base}.txt`, salida);
    
    
        resolve `tabla tabla-${base}.txt creado `
    
    })
}

module.exports = {
    crearArchivo
}