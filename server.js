const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// အဓိက လမ်းကြောင်း နှစ်ခုလုံးကို အသေချာဆုံး လုပ်ဆောင်ပေးရန်
app.get('/predict', (req, res) => {
    res.status(200).json({ result: "WIN 🎰" });
});

app.post('/predict', (rawReq, res) => {
    res.status(200).json({ result: "WIN 🎰" });
});

// ဆာဗာ အလုပ်လုပ်မလုပ် စမ်းသပ်ရန် (အကယ်၍ လင့်ခ်သက်သက်ပဲ ဝင်ကြည့်ရင်လည်း WIN ထွက်အောင်)
app.get('/', (req, res) => {
    res.status(200).json({ result: "WIN 🎰" });
});

module.exports = app;
