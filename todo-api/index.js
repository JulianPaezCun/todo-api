const express = require('express');
const tasks = require('./routes/tasks');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger/swagger.json');
const path = require('path');

const app = express();
app.use(express.json());

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/tasks', tasks);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(3000, () => {
  console.log('API escuchando en http://localhost:3000');
  console.log('Swagger en http://localhost:3000/api-docs');
});
