require('dotenv').config();
const app = require('./app/app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
});