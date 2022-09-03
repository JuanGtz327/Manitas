const codigo = require('./lib/fileHandler');
const Stack = require('./lib/stack');

const funStack = new Stack();
const lineasCod = codigo.split(/\r\n|\n/);

let funDef = codigo.match(/def [a-zA-Z]*\(.*\)\:/g); //Funciones de python
let funAsg = codigo.match(/[a-zA-Z]* *\= *[a-zA-Z]*\(.*\)/g); //Asignacion de funcion a una variable
let varAsg = codigo.match(/[a-zA-Z]+ *\={1} *(([a-zA-Z]*\[([0-9]+|[a-zA-Z]+)\])|([a-zA-Z]+)|([0-9]+)) *([\+\-\*\/]{1}(([a-zA-Z]*\[([0-9]+|[a-zA-Z]+)\])|([a-zA-Z]+)|([0-9]+)))*/g); //Asignacion de algo a una variable

//console.log(varAsg);

//Funcion para determinar los bloques ya validados de funciones
let funCont = 0
let bloqueFuncion = []
for (let i = 0; i < lineasCod.length; i++) {
    if (funDef[funCont] === lineasCod[i]) {
        bloqueFuncion.push(funDef[funCont])
        for (let j = i+1; j < lineasCod.length; j++) {
            if(lineasCod[j].startsWith('def'))
                break;
            else if (lineasCod[j].includes('return')){
                bloqueFuncion.push(lineasCod[j])
                break;
            }                
            else
                bloqueFuncion.push(lineasCod[j])
        }
        funCont++;
        console.log(`${lineasCod[i]} en la linea ${i + 1}`);
        funStack.push(bloqueFuncion);
        bloqueFuncion=[]
    }
}