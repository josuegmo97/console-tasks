const {v4: uId} = require('uuid')

class Tarea {

    id = ''
    desc = ''
    completadoEn = null

    constructor( desc ) {
        this.desc = desc
        this.id = uId()
    }

}

module.exports = Tarea