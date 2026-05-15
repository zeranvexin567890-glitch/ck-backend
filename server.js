const express = require('express');
const cors = require('cors');
const app = express();

// မည်သည့်နေရာမှမဆို (localhost ရော၊ အခြားနေရာများပါ) လှမ်းချိတ်ဆက်မှုကို အပြည့်အဝ ခွင့်ပြုခြင်း
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Options Request (Preflight) များကိုပါ ကြိုတင်ခွင့်ပြုပေးရန်
app.options('*', cors());

const handlePrediction = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ result: "WIN 🎰" });
};

app.get('/predict', handlePrediction);
app.post('/predict', handlePrediction);

app.get('/', (req, res) => {
    res.status(200).json({ result: "WIN 🎰" });
});

module.exports = app;
