const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const users = {}; // Mock in-memory database

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    users[username] = { password };
    res.json({ message: "Signup successful" });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username].password === password) {
        const token = jwt.sign({ username }, 'secret', { expiresIn: '1h' });
        res.json({ message: "Login successful", token });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

app.post('/forgot-password', (req, res) => {
    res.json({ message: "Password reset link sent" });
});

app.listen(4000, () => {
    console.log("Auth service is running on port 4000");
});
