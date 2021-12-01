const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,//Te avisa si has ingresado una bandera sin su valor
                    describe:'Es la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    //demandOption: true,//Te avisa si has ingresado una bandera sin su valor
                    default: false,
                    describe:'Muestra la tabla en la consola'//Esta opcion nos permite crear una info cuando coloquemos: ' node <name de nuestro project.js> --help '
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,//Te avisa si has ingresado una bandera sin su valor
                    default: 1,
                    describe:'Es la cantidad de números a enlistar'//Esta opcion nos permite crear una info cuando coloquemos: ' node <name de nuestro project.js> --help '
                })
                .check((argv,options)=>{
                    if( isNaN(argv.b) ){
                        throw 'La base tiene que ser un número'
                    }
                    else if( isNaN(argv.h) ){
                        throw 'El límite tiene que ser un número'
                    }
                    else{
                         return true;//OJO: Esto siempre va, sino se dispara un error. Ya que si no entra al if debe retornar un true, terminando el check.
                    }
                })
                .argv;//Permite acceder a las banderas ingresadas desde consola de manera más eficiente, ya que usa el formato JSON.

module.exports = argv;