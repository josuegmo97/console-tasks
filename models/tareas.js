const Tarea = require("./tarea");

class Tareas {

    _listado = {}

    get listadoArr() {
        const listado = []

        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]
            listado.push(tarea)
        })

        return listado
    }

    constructor() {
        this._listado = {}
    }

    borrarTarea(id = '') {

        if (this._listado[id]) {
            delete this._listado[id]
        }
    }

    cargarTareasFromArray(tareas = []) {

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea
        });

    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
    }

    listadoCompleto() {

        console.log()
        this.listadoArr.forEach((tarea, i) => {
            const idx = `${i + 1}.`.green;
            const { desc, completadoEn } = tarea
            const status = completadoEn ? 'Completada'.green : 'Pendiente'.red
            console.log(`${idx} ${desc} :: ${status}`)
        })

    }

    listarPendientesCompletadas(isCompletadas = true) {
        console.log()
        let idx = 0;
        this.listadoArr.forEach((tarea) => {

            const { desc, completadoEn } = tarea
            const status = completadoEn ? 'Completada'.green : 'Pendiente'.red

            if (isCompletadas) {
                if (completadoEn) {
                    idx += 1
                    console.log(`${idx.toString().green} ${desc} :: ${completadoEn.green}`)
                }
            } else {
                if (!completadoEn) {
                    idx += 1
                    console.log(`${idx.toString().green} ${desc} :: ${status}`)
                }
            }
            // const status = completadoEn ? 'Completada'.green : 'Pendiente'.red
        })
    }

    toggleComplete(ids = []) {

        ids.forEach(id => {

            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString()
            }

        })

        this.listadoArr.forEach(tarea => {
            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn =  null;
            }
        })

    }
}

module.exports = Tareas;