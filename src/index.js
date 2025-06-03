const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Simple function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Check prime endpoint
app.post('/api/check-prime', (req, res) => {
    const { number } = req.body;

    if (!number) {
        return res.status(400).json({ error: 'Please enter a number' });
    }

    const num = Number(number);

    if (isNaN(num) || !Number.isInteger(num)) {
        return res.status(400).json({ error: 'Please enter a valid integer' });
    }

    if (num < 1) {
        return res.status(400).json({ error: 'Number must be positive' });
    }

    return res.json({
        number: num,
        isPrime: isPrime(num)
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 