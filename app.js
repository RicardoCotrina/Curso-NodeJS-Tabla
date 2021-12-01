const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

//Uso de la terminal usando Yargs
console.clear();//Para limpiar la consola

crearArchivo( argv.b , argv.l, argv.h)
    .then( mensaje  => console.log( mensaje.rainbow,'creado'))
    .catch( err  => console.log( err ));

/*
NOTA IMPORTANTE: En el gitignore se coloca el node_modules ya que
eso no es de nosotros, ya que eso recibe soporte por la comunidad. 
Si descargamos un proyecto sin la carpeta 'node_modules'. Solamente
basta con usar el comando 'npm install' y tendremos todo ok, para
utilizar ese programa.
*/

//Uso de la terminal sin usar Yargs
/*
const [,,arg3 = 'base=5'] = process.argv;//Lo bueno de la desectructuración es que se puede inicializar varaibles
const [ ,base = 5] = arg3.split('=');
console.log(base)

crearArchivo( base )
    .then( mensaje  => console.log( mensaje ))
    .catch( err  => console.log( err ));
*/

//OJO: Para ejecutar un script del package.json se hace: npm run <nombre del script>