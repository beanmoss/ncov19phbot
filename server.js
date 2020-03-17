require('dotenv').config();
const BootBot = require('bootbot');

const faq = require('./conversations/faq');
const selfAssessmentPH = require('./conversations/self-assessment-ph');
const mainMenu = require('./conversations/main-menu');
const stat = require('./conversations/stat');

const PORT = process.env.PORT || 3000;

const bot = new BootBot({
  accessToken: process.env.PAGE_ACCESS_TOKEN,
  verifyToken: process.env.VERIFY_TOKEN,
  appSecret: process.env.APP_SECRET
});

mainMenu(bot);
selfAssessmentPH(bot);
faq(bot);
stat(bot);


bot.start(PORT);