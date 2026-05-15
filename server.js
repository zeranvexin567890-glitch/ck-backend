const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// GET ရော POST ရော လမ်းကြောင်းနှစ်ခုလုံးမှာ အဖြေထုတ်ပေးရန် ပြင်ဆင်ခြင်း
const handlePrediction = (req, res) => {
    res.json({ result: "WIN 🎰" });
};

app.get('/predict', handlePrediction);
app.post('/predict', handlePrediction);

// Vercel Serverless Function အတွက် အဆင်ပြေအောင် ဆာဗာပတ်လမ်းကြောင်းကို Export လုပ်ပေးခြင်း
module.exports = app;
