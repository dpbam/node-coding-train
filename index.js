const express = require('express');
const app = express();
app.listen(3003, () => console.log('Listening at PORT 3003'));
app.use(express.static('public'));
