const sqliteConnection = require("./sqlite");

function database(){
    sqliteConnection()
        .then(() => console.log("Conectado ao Banco de Dados"))
        .catch(e => console.log(e));
}
module.exports = database;