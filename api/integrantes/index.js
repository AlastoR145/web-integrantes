const sql = require('mssql');

module.exports = async function (context, req) {
    const config = {
        user: 'TU_USUARIO',
        password: 'TU_CONTRASEÑA',
        server: 'TU_SERVIDOR.database.windows.net',
        database: 'TU_BD',
        options: {
            encrypt: true
        }
    };

    try {
        await sql.connect(config);
        const result = await sql.query('SELECT Nombre FROM Integrantes');
        context.res = {
            body: result.recordset
        };
    } catch (err) {
        context.res = {
            status: 500,
            body: "Error: " + err.message
        };
    }
}
