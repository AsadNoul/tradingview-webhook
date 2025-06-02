# 📡 TradingView Webhook to Telegram Bot

This is a simple Node.js Express server that receives webhook alerts from TradingView and sends formatted Buy/Sell messages to a Telegram bot — ideal for scalping or swing trading setups.

---
  # 📡 name: "TradingView Webhook to Telegram Bot"
  description: "A simple Node.js Express server that receives webhook alerts from TradingView and sends formatted Buy/Sell messages to a Telegram bot — ideal for scalping or swing trading setups."
  author: "Your Name"
  license: "MIT"
  year: 2025

features:
  - Real-time TradingView alerts to Telegram
  - Supports BUY/SELL signal, entry, stop loss, TP1, TP2, TP3
  - Works with custom Pine Script alert messages
  - Fast, lightweight, and easy to deploy

requirements:
  - Node.js >= 14.x
  - Telegram Bot Token from BotFather
  - Telegram Chat or Group ID
  - Public webhook URL (Render, Replit, Railway, ngrok)

installation:
  steps:
    - git clone https://github.com/yourusername/tradingview-webhook.git
    - cd tradingview-webhook
    - npm install
  edit:
    file: "app.js"
    update:
      - TELEGRAM_BOT_TOKEN
      - TELEGRAM_CHAT_ID

running:
  local:
    command: "node app.js"
    expected_output: "✅ Server running on port 3000"

webhook_payload:
  example_json: |
    {
      "coin": "{{ticker}}",
      "signal": "BUY",
      "entry": "{{close}}",
      "sl": "66000",
      "tp1": "68000",
      "tp2": "69000",
      "tp3": "70000"
    }
  tradingview_webhook_url: "https://your-webhook-url.onrender.com/"

telegram_output:
  example_text: |
    🟢 BUY Signal Alert

    🪙 Coin: BTCUSDT
    🎯 Entry: 67000
    ⛔ Stop Loss: 66000

    🏁 Targets:
    • TP1: 68000
    • TP2: 69000
    • TP3: 70000

deployment:
  platform: "Render"
  steps:
    - Push your repo to GitHub
    - Go to https://render.com
    - Create new Web Service
    - Connect your GitHub repo
    - Configure build and start:
        build_command: "npm install"
        start_command: "node app.js"

testing:
  postman:
    method: "POST"
    url: "http://localhost:3000/"
    headers:
      - Content-Type: application/json
    body: |
      {
        "coin": "BTCUSDT",
        "signal": "BUY",
        "entry": "67000",
        "sl": "66000",
        "tp1": "68000",
        "tp2": "69000",
        "tp3": "70000"
      }

tips:
  - Use separate alerts for BUY and SELL via alertcondition() in Pine Script
  - Use `ngrok` for local testing: npx ngrok http 3000
