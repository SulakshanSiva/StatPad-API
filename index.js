// import express, create web server
const express = require('express');
const cors = require('cors');
const app = express();
//declare PORT
const PORT = process.env.PORT || 4000;

app.use(express.json())
app.use(cors());

// display message on server start
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));