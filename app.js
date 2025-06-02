const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const TELEGRAM_TOKEN = '7910269804:AAEyc4UOvpSb27Xh53hChS-_dV244hsu4fE';
const CHAT_ID = '1558652280';

app.post('/webhook', async (req, res) => {
    const { coin, signal, entry, stop_loss, target } = req.body;

    const message = `
📈 *${coin}*  
🛎️ *Signal:* ${signal}  
🎯 *Entry:* ${entry}  
📉 *Stop Loss:* ${stop_loss}  
🏁 *Target:* ${target}
⏱️ *Timeframe:* 15min
    `;

    try {
        await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            text: message,
            parse_mode: 'Markdown'
        });
        res.sendStatus(200);
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
        res.sendStatus(500);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Webhook server is running on port ${PORT}`);
});
