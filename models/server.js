const express = require('express')
const cors = require('cors')
const {dbConnection} = require("../database/config")

class Server{

  constructor(){

    this.app = express()

    this.port = process.env.PORT

    //this.usariosPath = '/api/usuarios'
    this.encuestaPath = '/api/encuesta'

    this.middlewares()

    this.routes()
    this.dbConectar()
  }
  async dbConectar() { 
    await dbConnection()
  }
  middlewares(){//Otras funcionalidades
    this.app.use( cors() )

    this.app.use( express.static('public'))

    //Permite peticiones json a la API
    this.app.use( express.json() );
  }

  routes(){//Rutas de la aplicación
    //this.app.use( this.usariosPath, require('../routes/usuarios'));
    this.app.use( this.encuestaPath, require('../routes/encuesta'));
  }
  
  listen(){
    this.app.listen(this.port, () => {
      console.log(`Escuchando por el puerto ${this.port}`)
    }) 
  }
}

module.exports = Server