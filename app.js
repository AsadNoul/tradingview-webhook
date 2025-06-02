const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const TELEGRAM_BOT_TOKEN = '7910269804:AAEyc4UOvpSb27Xh53hChS-_dV244hsu4fE';
const TELEGRAM_CHAT_ID = '1558652280'; // Your chat ID from Telegram

app.post('/', async (req, res) => {
  try {
    const {
      coin = 'Unknown',
      signal = 'N/A',
      entry = 'N/A',
      sl = 'N/A',
      tp1 = 'N/A',
      tp2 = 'N/A',
      tp3 = 'N/A'
    } = req.body;

    const emoji = signal.toUpperCase() === 'BUY' ? '🟢' : '🔴';

    const message = `
${emoji} *${signal.toUpperCase()} Signal Alert*

🪙 *Coin:* ${coin}
🎯 *Entry:* ${entry}
⛔ *Stop Loss:* ${sl}

🏁 *Targets:*
• TP1: ${tp1}
• TP2: ${tp2}
• TP3: ${tp3}
    `;

    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'Markdown'
    });

    res.status(200).send('✅ Alert sent to Telegram!');
  } catch (err) {
    console.error('❌ Error:', err.message);
    res.status(500).send('Failed to send alert.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
