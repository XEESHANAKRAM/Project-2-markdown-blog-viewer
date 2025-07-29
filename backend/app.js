const express = require('express');
const app = express();
const blogRoutes = require('./routes/blogRoutes');
const cors = require('cors');

app.use(cors());
app.use('/api', blogRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));