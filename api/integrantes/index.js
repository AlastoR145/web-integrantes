const sql = require('mssql');

module.exports = async function (context, req) {
    const config = {
        user: 'expo_plataformas',
        password: '984220336M@rco.',
        server: 'expo-plataformas.database.windows.net',
        database: 'bd_expofinal',
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
