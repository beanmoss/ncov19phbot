const PREFIX = 'MAIN_MENU';


module.exports = (bot) => {
  bot.on(`postback:${PREFIX}`, (payload, chat) => {
    showMainMenu(chat);
  });

  bot.hear('help', (payload, chat) => {
    showMainMenu(chat);
  })
}

function showMainMenu(chat){
  chat.getUserProfile().then((user) => {
    chat.say({
      text: `Kumusta ${user.first_name ? user.first_name: ''}. Ano po ang maipaglilingkod ko sa inyo ngayong araw? Pumili at pindutin ang sagot sa sumusunod. Or type stats.`,
      buttons: [
        {
          type: 'postback',
          title: 'Kadalasang katanungan',
          payload: 'FAQ_NCOV'
        },
        {
          type: 'postback',
          title: 'Self Assessment Tool PH',
          payload: `SELF_ASSESSMENT_PH`
        },
        {
          type: 'postback',
          title: 'Statistics',
          payload: `STATS`
        },
      ]
    })
  });
}