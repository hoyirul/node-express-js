const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json([{
        name: "Mochammad Hairullah",
        email: "irul@gmail.com",
        phone: "087XXXXXXXXX"
    }]);
});

app.listen(PORT, () => {
    console.log('Server is running with port 3000');
});