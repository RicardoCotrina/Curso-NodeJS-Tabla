const fs = require('fs');
const colors = require('colors');

//Utilizando try-Catch
/*
const crearArchivo = async(base = 5) => {

    try{
        console.log('==========================');
        console.log('      Tabla del : ',base);
        console.log('==========================');

        let salida = '';

        for(let i = 1; i <= 10 ;i++){

            salida += `${base} x ${i} = ${5*i}\n`;
        }

        //console.log(salida);
        /*
        fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
            if(err) throw err;
            console.log(`Tabla-${base}.txt creado`);
        })

        fs.writeFileSync(`tabla-${base}.txt`,salida);
        //console.log(`Tabla-${base}.txt creado`);
        return `Tabla-${base}.txt creado`
    }catch(err){
        throw err;
    }
}    
*/


//Utilizando promesas
const crearArchivo = (base = 5,listar=false,hasta=1) => {

    return promise = new Promise((resolve,reject)=>{
        if( listar == true ){
            console.log('=========================='.green);
            console.log('      Tabla del : '.green,colors.blue(base));
            console.log('=========================='.green);
        }

        let salida = '';
        let consola = '';

        for(let i = 1; i <= hasta ;i++){
            salida += `${base} x ${i} = ${ base * i }\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${ base * i }\n`;
        }

        if( listar == true) {
            console.log(consola)
        }
        /*
        fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
            if(err) throw err;
            console.log(`Tabla-${base}.txt creado`);
        })*/

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        //console.log(`Tabla-${base}.txt creado`);

        //Si deseas dar un retorno se hace con el resolve
        resolve(`Tabla-${base}.txt`);
    })
}    

//Exportaremos un modulo
module.exports = {
    crearArchivo
}