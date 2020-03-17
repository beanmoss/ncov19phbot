const PREFIX = 'SELF_ASSESSMENT_PH';

module.exports = (bot) => {


  bot.on(`postback:${PREFIX}`, (payload, chat) => {
    chat.say({
      text: 'Ang pagtatasa sa sarili para sa panganib ng coronavirus (COVID-19). Piliin lamang (Pindutin ang sagot) YES Or NO mula sa mga ibinigay na sagot. Mangyaring huwag i-type ang iyong sagot. Handa ka na ba?',
      buttons: [{
          type: 'postback',
          title: 'YES',
          payload: `${PREFIX}_Q1`
        },
        {
          type: 'postback',
          title: 'NO',
          payload: `MAIN_MENU`
        },
      ]
    })
  });

  bot.on(`postback:${PREFIX}_Q1`, (payload, chat) => {
    chat.say({
      text: `
      Naglalakbay ka ba sa kasaysayan ng nakaraang 14 araw sa mga bansa na may lokal na paghahatid at peligro ng istilo ng pag-import ng China, Italy, Iran, South Korea, Spain, Germany, France, USA, Switzerland, Norway, Japan, Metro Manila, Negros at iba pa?
      Nakisalamuha or may close-contact ka ba sa taong my sintomas or nagkapositibo sa NCOV19?
      `,
      buttons: [{
          type: 'postback',
          title: 'YES',
          payload: `${PREFIX}_Q1_YES`
        },
        {
          type: 'postback',
          title: 'NO',
          payload: `${PREFIX}_Q1_NO`
        },
      ]
    })
  });


  bot.on(`postback:${PREFIX}_Q1_YES`, (payload, chat) => {
    chat.say({
      text: 'Mayroon ka bang pananakit nang katawan, lagnat, ubo’t sipon o hirap at pag-iksi ng paghinga at iba pang problema sa daluyan ng hangin?',
      buttons: [{
          type: 'postback',
          title: 'YES',
          payload: `${PREFIX}_Q1_YES_Q2_YES`
        },
        {
          type: 'postback',
          title: 'NO',
          payload: `${PREFIX}_Q1_YES_Q2_NO`
        },
      ]
    })
  });

  bot.on(`postback:${PREFIX}_Q1_NO`, (payload, chat) => {
    chat.say({
      text: `
      Mayroon ka bang pananakit nang katawan, lagnat, ubo’t sipon o hirap at pag-iksi ng paghinga at iba pang problema sa daluyan ng hangin?
      `,
      buttons: [{
          type: 'postback',
          title: 'YES',
          payload: `${PREFIX}_Q1_NO_Q2_YES`
        },
        {
          type: 'postback',
          title: 'NO',
          payload: `${PREFIX}_Q1_NO_Q2_NO`
        },
      ]
    })
  });

  bot.on(`postback:${PREFIX}_Q1_YES_Q2_YES`, (payload, chat) => {
    chat.say({
      text: 'Ang mga pasyente, lalo na ang mga manlalakbay, na nagpapakita ng sintomas ng 2019-nCoV ay dapat agad kumonsulta sa kanilang mga doktor or sa pinakamalapit na ospital o health center. Ref: https://www.doh.gov.ph/sites/default/files/UPDATED%20DECISION%20TOOL.pdf',
      buttons: [{
        type: 'postback',
        title: 'Main Menu',
        payload: `MAIN_MENU`
      }]
    })
  });

  bot.on(`postback:${PREFIX}_Q1_YES_Q2_NO`, (payload, chat) => {
    chat.say({
      text: 'Hinde na kailangang kumonsulta sa Doktor. Kung maari, ilayo ang sarili o dumistansya muna sa mga tao ng 14 na araw para masiguradong ikaw ay ligtas pati na ang mga tao sa paligid. Ref: https://www.doh.gov.ph/sites/default/files/UPDATED%20DECISION%20TOOL.pdf',
      buttons: [{
        type: 'postback',
        title: 'Main Menu',
        payload: `MAIN_MENU`
      }]
    })
  });

  bot.on(`postback:${PREFIX}_Q1_NO_Q2_NO`, (payload, chat) => {
    chat.say({
      text: 'Hinde na kailangan kumonsulta sa Doktor. Kung maari, ilayo ang sarili o dumistansya muna sa mga tao ng 14 na araw para masiguradong ikaw ay ligtas pati na ang mga tao sa paligid. Ref: https://www.doh.gov.ph/sites/default/files/UPDATED%20DECISION%20TOOL.pdf',
      buttons: [{
        type: 'postback',
        title: 'Main Menu',
        payload: `MAIN_MENU`
      }]
    })
  });

  bot.on(`postback:${PREFIX}_Q1_NO_Q2_YES`, (payload, chat) => {
    chat.say({
      text: 'Kailangang kumonsulta sa Doktor. Kung maari, ilayo ang sarili o dumistansya muna sa mga tao ng 14 na araw para masiguradong ikaw ay ligtas pati na ang mga tao sa paligid. Ref: https://www.doh.gov.ph/sites/default/files/UPDATED%20DECISION%20TOOL.pdf',
      buttons: [{
        type: 'postback',
        title: 'Main Menu',
        payload: `MAIN_MENU`
      }]
    })
  });


}