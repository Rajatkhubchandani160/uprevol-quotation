const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const router = require('./routes/index');
const cookieParser = require('cookie-parser');
const cron = require('node-cron'); // Import the cron module
const autoDeleteExpiredSales = require('./controller/autodeleteexpiredsale'); // Import the auto-delete function
require('dotenv').config();

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use('/api', router);

const PORT = 8080 || process.env.PORT;

connectDB().then(() => {
    // Start the server after successful database connection
    app.listen(PORT, () => {
        console.log("Server is running on port", PORT);
        console.log("DB connected");

        // Add the cron job here
        cron.schedule('0 0 * * *', async () => { // This cron job runs every day at midnight
            try {
                await autoDeleteExpiredSales();
                console.log('Auto-deletion of expired sales completed.');
            } catch (error) {
                console.error('Error auto-deleting expired sales:', error);
            }
        });
    });
});
