const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// AI Prediction အတွက် Route
app.post('/predict', (req, res) => {
    // ဆာဗာ အလုပ်လုပ်ကြောင်း စမ်းသပ်ရန် WIN 🎰 ကို ပြန်ပေးခြင်း
    res.json({ reply: "WIN 🎰" }); 
});

// ဝဘ်ဆိုက် ပင်မစာမျက်နှာကို စစ်ဆေးရန် (Vercel အလုပ်လုပ်မလုပ် သိနိုင်ရန်)
app.get('/', (req, res) => {
    res.send("CK AI Backend Server is Running!");
});

// Vercel အတွက် ဆာဗာကို Export ထုတ်ပေးခြင်း (အရေးကြီးဆုံးအပိုင်း)
module.exports = app;

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}
