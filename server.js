const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set initial status
let status = 'Off';

// Serve static files (public folder)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to get the current status
app.get('/api/status', (req, res) => {
    res.json({ status });
});

// Endpoint to toggle the status
app.post('/api/toggle-status', (req, res) => {
    status = status === 'On' ? 'Off' : 'On';
    res.json({ status });
});

// Serve user and admin pages
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'public', 'admin.html')));
app.get('/user', (req, res) => res.sendFile(path.join(__dirname, 'public', 'user.html')));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
 
