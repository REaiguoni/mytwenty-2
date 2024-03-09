// Import necessary libraries or modules
const express = require('express');
const axios = require('axios');

// Create an Express application
const app = express();

// Define a route to provide historical price data of Bitcoin
app.get('/bitcoin-price-history', async (req, res) => {
    try {
        // Fetch historical price data from an API (replace this with your actual data source)
        const response = await axios.get('https://api.example.com/bitcoin/price-history');

        // Extract historical price data of Bitcoin from the response
        const bitcoinPriceHistory = response.data;

        // Send the historical price data of Bitcoin as JSON response
        res.json(bitcoinPriceHistory);
    } catch (error) {
        console.error('Error fetching Bitcoin price history:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
