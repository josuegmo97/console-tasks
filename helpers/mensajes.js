require('colors')

const mostrarMenu = () => {
    console.clear()

    return new Promise(resolve => {

        console.log("========================".green)
        console.log("  Seleccione una opcion ".green)
        console.log("========================\n".green)

        console.log(`${'1.'.green} Crear tarea`)
        console.log(`${'2.'.green} Listar tarea`)
        console.log(`${'3.'.green} Listar tareas completadas`)
        console.log(`${'4.'.green} Listar tareas pendientes`)
        console.log(`${'5.'.green} Completar tarea(s)`)
        console.log(`${'6.'.green} Borrar tarea`)
        console.log(`${'0.'.green} Salir \n`)

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('Seleccione una opcion: ', (opt) => {
            readline.close()
            resolve(opt)
        })

    })



}

const pause = () => {

    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`Presiona ${'ENTER'.green} para continuar`, (opt) => {
            readline.close()
            resolve(opt);
        })
    })
    
}

module.exports = {
    mostrarMenu,
    pause
}