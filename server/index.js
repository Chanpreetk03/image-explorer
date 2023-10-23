const express = require('express');
const app = express();

const database = require('./config/database');
const { cloudinaryConnect } = require('./config/cloudinary')

dotenv.config()
const PORT = process.env.PORT || 4000

//db connect
database.connect()

//clodinary connect
cloudinaryConnect()

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
