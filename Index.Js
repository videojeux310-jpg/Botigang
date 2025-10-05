const TelegramBot = require('node-telegram-bot-api');
const token = '8197718580:AAGb7u9zjGYVFdaWwF3NJxc2qFKI4mIFSZE'; // Remplace par ton token de @BotFather
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Salut ! Envoie une photo ! 📸');
});

bot.on('photo', (msg) => {
  bot.sendMessage(msg.chat.id, 'Photo reçue !');
});

console.log('Bot démarré !');
