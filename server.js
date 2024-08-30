const express = require('express');
const { swaggerUi, swaggerDocs } = require('./swagger');

const app = express();


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/productos', require('./routes/productos'));
app.use('/api/carrito', require('./routes/carrito'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));