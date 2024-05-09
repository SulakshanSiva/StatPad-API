const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

const teamRoutes = require('./Routes/teamRoutes');

app.use(express.json());
app.use(cors());

app.use('/clubStat', teamRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
