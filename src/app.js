const express = require('express');
const route = require('./routes/routes')
const middleware = require('./middleware/logsMiddleware')
const app = express();
const PORT = 3000;

app.use(middleware.logRequest);
app.use(express.json());
app.use('/', route);

app.listen(PORT, () => {
    console.log('Server is running with port 3000');
});