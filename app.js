const express = require('express');


const app = express();


app.use(express.json());


const blogRoutes = require('./routes/blogRoutes');


app.use('/api', blogRoutes);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
