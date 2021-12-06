const fs = require('fs');

const creaArchivo = async ( base = 5, listar = false, hasta = 10 ) => {
    try {
        
        let salida = '';

        for(let i = 1; i<=hasta; i++){
            
            salida += (`${base} ${'x'.green} ${i} = ${base*i}\n`)
        }
        
        if(listar){
            console.log(`---------------tabla del ${base} -------------`.green);
            console.log('-----------------------------------'.green)
            console.log(salida);
        }

        fs.writeFile(`./salida/tabla-${base}.txt`, salida, (err)=>{
            if(err) throw err
        });
    
        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }
    

} 

module.exports = {
    creaArchivo
}