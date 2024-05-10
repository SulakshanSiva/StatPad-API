const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

const teamRoutes = require('./Routes/teamRoutes');
const playerRoutes = require('./Routes/playerRoutes');

app.use(express.json());
app.use(cors());

app.use('/clubStat', teamRoutes);
app.use('/playerStat', playerRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));