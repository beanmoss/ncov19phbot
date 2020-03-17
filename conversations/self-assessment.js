const PREFIX = 'SELF_ASSESSMENT';


module.exports = (bot) => {
  bot.on(`postback:${PREFIX}`, (payload, chat) => {
    chat.say({
      text: 'Self-assessment for risk of coronavirus (COVID-19). Only choose (CLICK THE BUTTONS) YES or NO from the provided answers. Please do not type your answer. Are you ready?',
      buttons: [{
          type: 'postback',
          title: 'YES',
          payload: `${PREFIX}_YES`
        },
        {
          type: 'postback',
          title: 'NO',
          payload: `MAIN_MENU`
        },
      ]
    })
  });

  // Q1
  bot.on(`postback:${PREFIX}_YES`, (payload, chat) => {
    chat.say({
      text: 'Q1: Have you been in, or transited through, mainland China or Iran in the past 14 days, returned from South Korea on/after 5 March, or returned from Italy on/after 11 March?',
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
    });
  });

  bot.on(`postback:${PREFIX}_Q1_YES`, (payload, chat) => {
    Q1to3YESReply(chat);
  });

  // Q2
  bot.on(`postback:${PREFIX}_Q1_NO`, (payload, chat) => {
    chat.say({
      text: `
      Q2: Have you been in CLOSE contact with a confirmed case of COVID-19? CLOSE contact is defined as:
      – spending more than 15 minutes face-to-face with a person who is a confirmed case,
      in the 24 hours before they showed symptoms or once they showed symptoms
      – sharing a closed space for more than two hours with a person who is a confirmed case,
      in the 24 hours before they showed symptoms or once they showed symptoms.
      `,
      buttons: [{
          type: 'postback',
          title: 'YES',
          payload: `${PREFIX}_Q2_YES`
        },
        {
          type: 'postback',
          title: 'NO',
          payload: `${PREFIX}_Q2_NO`
        },
      ]
    });
  });

  // Q2
  bot.on(`postback:${PREFIX}_Q2_YES`, (payload, chat) => {
    Q1to3YESReply(chat);
  });


  // Q3
  bot.on(`postback:${PREFIX}_Q2_NO`, (payload, chat) => {
    chat.say({
      text: `
      Q3: Have you been in CASUAL contact with a confirmed case of COVID-19? CASUAL contact is defined as:
      – spending less than 15 minutes face-to-face in any setting with a person who is a confirmed case AND they had symptoms at the time
      – sharing a closed space for less than two hours with a person who is a confirmed case they had symptoms at the time.
      `,
      buttons: [{
          type: 'postback',
          title: 'YES',
          payload: `${PREFIX}_Q3_YES`
        },
        {
          type: 'postback',
          title: 'NO',
          payload: `${PREFIX}_Q3_NO`
        },
      ]
    });
  });

  // Q3
  bot.on(`postback:${PREFIX}_Q3_YES`, (payload, chat) => {
    Q1to3YESReply(chat);
  });

  // Q4
  bot.on(`postback:${PREFIX}_Q3_NO`, (payload, chat) => {

    const lines = [
      `You do not need to self-quarantine or be tested for COVID-19 If you are unwell with any other illness your doctor will assess and manage you in the normal way.`,
      `In addition to the above steps, the following information applies to healthcare workers and residential care workers who have direct contact with patients or residents.`,
      `If you have an influenza-like illness, which is a fever above 37.5 and symptoms of an acute respiratory infection (shortness of breath, cough, coryza and/or sore throat):
      – do not go to work
      – ring the COVID-19, Ring the COVID-19 hotlines on your area https://www.google.com/search?q=NCOV19+help+hotline&oq=NCOV19+help+hotline, or a GP or emergency department, to arrange for testing and appropriate care.`,
      `*The most common symptoms of COVID-19 are fever, cough, shortness of breath, muscle pain and fatigue.`
    ]

    chat.say(lines).then(() => {
      chat.say({
        text: `
        If you test negative you can return to work when well, at the direction of your treating doctor.
        A healthcare worker who has worn appropriate personal protective equipment while treating a patient does not become a close contact as a result of that care. They may be a casual contact as a result of that care so should monitor themself for 14 days.
        `,
        buttons: [{
          type: 'postback',
          title: 'Main Menu',
          payload: 'MAIN_MENU'
        }, ]
      });
    });
  });
}


function Q1to3YESReply(chat) {

  chat.say(`
    Do not attend work and self-quarantine for 14 days after leaving that country. 
    If you have a fever or respiratory symptoms*: Ring the COVID-19 hotlines on your area https://www.google.com/search?q=NCOV19+help+hotline&oq=NCOV19+help+hotline, 
    or a GP or emergency department, to arrange for testing and appropriate care.
    `).then(() => {
    chat.say({
      text: `
        * If you test positive, You will receive care at home or in hospital depending on the severity of your illness.
        * If you test negative If you were in self-quarantine continue to self-quarantine for the remainder of the 14 days.
        * If you are a casual contact, continue to monitor yourself for the remainder of the 14 days.
        `,
      buttons: [{
        type: 'postback',
        title: 'Back to main menu',
        payload: 'MAIN_MENU'
      }, ]
    });
  });
}