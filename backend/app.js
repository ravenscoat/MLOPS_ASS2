const express = require('express');
const app = express();
app.use(express.json());

app.get('/data', (req, res) => {
    res.json({ message: "Backend API - User data fetched successfully" });
});

app.listen(3000, () => {
    console.log("Backend service is running on port 3000");
});
