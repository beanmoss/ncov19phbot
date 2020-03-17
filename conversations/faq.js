const PREFIX = 'FAQ_NCOV';

module.exports = (bot) => {
  bot.on(`postback:${PREFIX}`, (payload, chat) => {
    chat.say({
      text: '(1-2 of 4) Mga kadalasang katanungan ukol sa novel coronavirus disease (COVID-19)',
      buttons: [{
          type: 'postback',
          title: '1. Impormasyon ukol sa Corona Virus',
          payload: `${PREFIX}_1_6`
        },
        {
          type: 'postback',
          title: '2. Pag-iwas sa 2019-NCOV',
          payload: `${PREFIX}_7_9`
        },
        {
          type: 'postback',
          title: 'More',
          payload: `${PREFIX}_MORE`
        }
      ]
    })
  });

  bot.on(`postback:${PREFIX}_MORE`, (payload, chat) => {
    chat.say({
      text: '(3-4 of 4) Mga kadalasang katanungan ukol sa novel coronavirus disease (COVID-19)',
      buttons: [{
          type: 'postback',
          title: 'Paglalakbay',
          payload: `${PREFIX}_10_13`
        },
        {
          type: 'postback',
          title: 'Pagresponde atbp.',
          payload: `${PREFIX}_14_15`
        },
        {
          type: 'postback',
          title: 'Main Menu',
          payload: `MAIN_MENU`
        },
      ]
    })
  });

  bot.on(`postback:${PREFIX}_1_6`, (payload, chat) => {
    chat.say({
      text: '(1-2 of 6)Impormasyon ukol sa Corona Virus',
      buttons: [{
          type: 'postback',
          title: 'Ano ang coronaviruses?',
          payload: `${PREFIX}_1`
        },
        {
          type: 'postback',
          title: 'Ano ang novel coronavirus?',
          payload: `${PREFIX}_2`
        },
        {
          type: 'postback',
          title: 'More',
          payload: `${PREFIX}_1_6_2_MORE`
        },
      ]
    })
  });

  bot.on(`postback:${PREFIX}_1_6_2_MORE`, (payload, chat) => {
    chat.say({
      text: '(3-4 of 6)Impormasyon ukol sa Corona Virus',
      buttons: [{
          type: 'postback',
          title: 'Saan nagmula ang novel coronavirus (2019-nCoV)?',
          payload: `${PREFIX}_3`
        },
        {
          type: 'postback',
          title: 'Anu-ano ang mga sintomas at kumplikasyong dulot ng coronavirus infection?',
          payload: `${PREFIX}_4`
        },
        {
          type: 'postback',
          title: 'More',
          payload: `${PREFIX}_1_6_3_MORE`
        },
      ]
    })
  });

  bot.on(`postback:${PREFIX}_1_6_3_MORE`, (payload, chat) => {
    chat.say({
      text: '(5-6 of 6)Impormasyon ukol sa Corona Virus',
      buttons: [{
          type: 'postback',
          title: 'Paano naikakalat ang 2019-nCov?',
          payload: `${PREFIX}_5`
        },
        {
          type: 'postback',
          title: 'May gamot ba sa 2019-nCoV?',
          payload: `${PREFIX}_6`
        },
        {
          type: 'postback',
          title: 'Main Menu',
          payload: `MAIN_MENU`
        },
      ]
    })
  });



  bot.on(`postback:${PREFIX}_1`, (payload, chat) => {
    chat.say({
      text: 'Ang coronaviruses ay pamilya ng mga virus na nagdudulot ng iba’t ibang klaseng sakit, mula sa karaniwang ubo’t sipon hanggang sa mas malulubhang impeksyon tulad ng MERS-CoV at SARS-CoV. Ang coronavirus ay maaari ring magdulot ng iba’t ibang sakit sa mga hayop.',
      buttons: [{
          type: 'postback',
          title: 'Impormasyon ukol sa Corona Virus',
          payload: `${PREFIX}_1_6`
        },
        {
          type: 'postback',
          title: 'Mga kadalasang katanungan',
          payload: `${PREFIX}`
        },
        {
          type: 'postback',
          title: 'Main Menu',
          payload: `MAIN_MENU`
        },
      ]
    })
  });

  bot.on(`postback:${PREFIX}_2`, (payload, chat) => {
    chat.say({
      text: `
      Ang novel coronavirus (2019-nCoV) ay isang bagong uri ng coronavirus na hindi pa natatagpuan sa mga tao noon. Ang 2019-nCoV ay nagdulot ng malalang pneumonia sa ilang tao sa Tsina at kumalat na rin sa iba pang mga syudad at bansa.
      Noong ika-30 ng Enero 2020, inirekomenda ng World Health Organization na palitan ang opisyal na pangalan nito sa “2019 novel coronavirus Acute Respiratory Disease” o 2019-nCoV ARD.
      `,
      buttons: [{
          type: 'postback',
          title: 'Impormasyon ukol sa Corona Virus',
          payload: `${PREFIX}_1_6`
        },
        {
          type: 'postback',
          title: 'Mga kadalasang katanungan',
          payload: `${PREFIX}`
        },
        {
          type: 'postback',
          title: 'Main Menu',
          payload: `MAIN_MENU`
        },
      ]
    })
  });

  bot.on(`postback:${PREFIX}_3`, (payload, chat) => {
    chat.say({
      text: `
      Noong ika-31 ng Disyembre 2019, naitala ang ilang kaso ng pneumonia sa Wuhan, China. Napag-alaman kamakailan lamang na ang mga kaso ay dulot pala ng isang uri ng hindi pa kilalang coronavirus. Ang coronavirus na ito ay karaniwang sa hayop lamang natatagpuan, at hindi pa nakita sa mga tao noon.
      `,
      buttons: [{
          type: 'postback',
          title: 'Impormasyon ukol sa Corona Virus',
          payload: `${PREFIX}_1_6`
        },
        {
          type: 'postback',
          title: 'Mga kadalasang katanungan',
          payload: `${PREFIX}`
        },
        {
          type: 'postback',
          title: 'Main Menu',
          payload: `MAIN_MENU`
        },
      ]
    })
  });

  bot.on(`postback:${PREFIX}_4`, (payload, chat) => {
    chat.say({
      text: `
      Ang mga karaniwang sintomas na dulot ng coronavirus ay lagnat, ubo’t sipon, hirap at pag-iksi ng paghinga at iba pang problema sa daluyan ng hangin. Sa mga malulubhang kaso, maaari itong maging sanhi ng pneumonia, acute respiratory syndrome, problema sa bato, at pagkamatay.
      `,
      buttons: [{
          type: 'postback',
          title: 'Impormasyon ukol sa Corona Virus',
          payload: `${PREFIX}_1_6`
        },
        {
          type: 'postback',
          title: 'Mga kadalasang katanungan',
          payload: `${PREFIX}`
        },
        {
          type: 'postback',
          title: 'Main Menu',
          payload: `MAIN_MENU`
        },
      ]
    })
  });

  bot.on(`postback:${PREFIX}_5`, (payload, chat) => {
    chat.say({
      text: `
      Noong ika-24 ng Enero 2020, kinumpirma ng World Health Organization na ang 2019-nCoV ay naipapasa tao-sa-tao. Ngunit wala pang sapat na ebidensyang nagpapatunay sa tindi at bilis ng pagkahawa nito, maging ang orihinal na pinanggalingan ng outbreak.

Masugid pa ring pinag-aaralan ng mga eksperto ang pinaggalingan ng sakit at kung paano ito kumakalat. Bagama’t napatunayan na iba ito sa SARS at MERS, ang bilis ng pagkalat at bagsik nito ay patuloy pang inaalam.
      `,
      buttons: [{
          type: 'postback',
          title: 'Impormasyon ukol sa Corona Virus',
          payload: `${PREFIX}_1_6`
        },
        {
          type: 'postback',
          title: 'Mga kadalasang katanungan',
          payload: `${PREFIX}`
        },
        {
          type: 'postback',
          title: 'Main Menu',
          payload: `MAIN_MENU`
        },
      ]
    })
  });
  bot.on(`postback:${PREFIX}_6`, (payload, chat) => {
    chat.say({
      text: `
      Wala pang gamot o treatment sa 2019-nCoV. Ngunit marami sa sintomas nito ang maaaring gamutin base sa kalagayang pangkalusugan ng pasyente. Mabisa rin ang masugid na pag-aalaga at pagsuporta o supportive care para sa mga pasyente.
      `,
      buttons: [{
          type: 'postback',
          title: 'Impormasyon ukol sa Corona Virus',
          payload: `${PREFIX}_1_6`
        },
        {
          type: 'postback',
          title: 'Mga kadalasang katanungan',
          payload: `${PREFIX}`
        },
        {
          type: 'postback',
          title: 'Main Menu',
          payload: `MAIN_MENU`
        },
      ]
    })
  });

  bot.on(`postback:${PREFIX}_7_9`, (payload, chat) => {
    chat.say({
      text: '(1-2 of 3)Pag-iwas sa 2019-NCOV',
      buttons: [{
          type: 'postback',
          title: 'Ano ang maaaring gawin ng publiko upang maiwasan ang pagkalat ng 2019-nCoV?',
          payload: `${PREFIX}_7`
        },
        {
          type: 'postback',
          title: 'Ano ang dapat gawin ng mga ospital na may posibleng kaso ng 2019-nCoV?',
          payload: `${PREFIX}_8`
        },
        {
          type: 'postback',
          title: 'More',
          payload: `${PREFIX}_7_9_MORE`
        },
      ]
    })
  });

  bot.on(`postback:${PREFIX}_7_9_MORE`, (payload, chat) => {
    chat.say({
      text: '(3 of 3)Pag-iwas sa 2019-NCOV',
      buttons: [{
          type: 'postback',
          title: 'Sino ang mga dapat imbestigahan at i-test sa 2019-nCoV infection?',
          payload: `${PREFIX}_9`
        },
        {
          type: 'postback',
          title: 'Main Menu',
          payload: `MAIN_MENU`
        },
      ]
    })
  });

  bot.on(`postback:${PREFIX}_7`, (payload, chat) => {
    chat.say(`
    Ano ang maaaring gawin ng publiko upang maiwasan ang pagkalat ng 2019-nCoV?`)
      .then(() => {
        chat.say({
          text: `Inaanyayahan ng Kagawaran ng Kalusugan ang publiko na:
a. Ugaliin ang paghuhugas ng kamay
b. Sundin ang tamang paraan ng pag-ubo:
  i. Laging magdala ng panyo o tissue
  ii. Takpan ang buong ilong at bibig gamit ang panyo/tissue (Maaaring gamitin ang manggas o loob ng siko)
  iii. Lumayo sa mga tao kung babahing o uubo
  iv. Huwag dumura kung saan-saan
  v. Itapon ang ginamit na tissue sa basurahan
  vi. Laging maghugas ng kamay
  vii. Gumamit ng hand sanitizer o alcohol
c. Iwasan ang paghawak sa mga hayop
d. Siguraduhing luto nang maayos ang pagkain
e. Panatilihing malusog ang sarili upang lumakas ang resistensya`,
          buttons: [{
              type: 'postback',
              title: 'Pag-iwas sa 2019-NCOV',
              payload: `${PREFIX}_7_9`
            },
            {
              type: 'postback',
              title: 'Mga kadalasang katanungan',
              payload: `${PREFIX}`
            },
            {
              type: 'postback',
              title: 'Main Menu',
              payload: `MAIN_MENU`
            },
          ]
        })
      })

  });

  bot.on(`postback:${PREFIX}_8`, (payload, chat) => {
    chat.say(`
    Ano ang dapat gawin ng mga ospital na may posibleng kaso ng 2019-nCoV?

    Ang mga disease surveillance coordinators ng mga ospital ang siyang responsable sa paunang pag-imbestiga ng mga posibleng kaso ng 2019-nCoV. Dapat nilang abisuhan ang regional epidemiology at surveillance units, na siya namang makikipag-ugnayan sa Epidemiology Bureau.
    Dapat ding magpasa ang mga ospital ng mga sample sa Research Institute of Tropical Medicine (RITM) para sa screening.`)
      .then(() => {
        chat.say({
          text: `
  Inaanyayahan din ng DOH ang mga health workers na maging mas maingat kapag nakikipag-ugnayan sa mga pasyenteng may acute respiratory infection, lalo na sa mga mga kasaysayan ng paglalakbay sa China.
  Ang mga pasilidad na pangkalusugan ay hinihimok rin na paghusayin pa ang kanilang standard infection prevention and control practices, lalo na ang mga emergency departments.
        `,
          buttons: [{
              type: 'postback',
              title: 'Pag-iwas sa 2019-NCOV',
              payload: `${PREFIX}_7_9`
            },
            {
              type: 'postback',
              title: 'Mga kadalasang katanungan',
              payload: `${PREFIX}`
            },
            {
              type: 'postback',
              title: 'Main Menu',
              payload: `MAIN_MENU`
            },
          ]
        })
      });
  });

  bot.on(`postback:${PREFIX}_9`, (payload, chat) => {
    chat.say(`
    Sino ang mga dapat imbestigahan at i-test sa 2019-nCoV infection?

    Ang mga sumusunod ang dapat na agad imbestigahan at i-test para sa nCoV:
1) Taong may severe acute respiratory infection (SARI), lagnat at ubo, at napapabilang sa isa sa mga sumusunod:
  a) Tumira o nagpunta sa Wuhan sa loob ng labing-apat (14) na araw bago nagsimula ang mga sintomas
  b) Healthcare worker na nagtatrabaho sa isang lugar kung saan ang mga pasyente ay may SARI, kahit hindi galing sa Wuhan
    `)
      .then(() => {
        chat.say({
          text: `
        2). Taong may acute respiratory infection (ARI) at kabilang sa mga sumusunod sa loob ng labing-apat (14) na araw bago nagsimula ang mga sintomas:
          a) Nakasalamuha ang isang taong kumpirmado o pinaghihinalaang may n-CoV
          b) Nagpunta o nagtatrabaho sa pamilihan o animal market sa Wuhan
          c) Nagpunta o nagtatrabaho sa isang health facility kung saan may kumpirmadong kaso ng 2019-nCoV
        `,
          buttons: [{
              type: 'postback',
              title: 'Pag-iwas sa 2019-NCOV',
              payload: `${PREFIX}_7_9`
            },
            {
              type: 'postback',
              title: 'Mga kadalasang katanungan',
              payload: `${PREFIX}`
            },
            {
              type: 'postback',
              title: 'Main Menu',
              payload: `MAIN_MENU`
            },
          ]
        })
      });
  });

  bot.on(`postback:${PREFIX}_10_13`, (payload, chat) => {
    chat.say({
      text: '(1-2 of 4)Paglalakabay',
      buttons: [{
          type: 'postback',
          title: 'Ano ang dapat mong gawin kung ikaw ay naglakbay sa Wuhan, China kamakailan lamang at nagpapakita ng mga sintomas ng 2019-nCoV?',
          payload: `${PREFIX}_10`
        },
        {
          type: 'postback',
          title: 'Mayroon akong lagnat at ubo, pero hindi ako pumunta sa China kamakailan o nakipag-ugnayan sa sinumang nanggaling mula sa China. Ano ang gagawin ko?',
          payload: `${PREFIX}_11`
        },
        {
          type: 'postback',
          title: 'More',
          payload: `${PREFIX}_10_13_MORE`
        },
      ]
    })
  });

  bot.on(`postback:${PREFIX}_10_13_MORE`, (payload, chat) => {
    chat.say({
      text: '(3-4 of 4)Paglalakabay',
      buttons: [{
          type: 'postback',
          title: 'Mayroon bang travel restriction na ipapatupad?',
          payload: `${PREFIX}_12`
        },
        {
          type: 'postback',
          title: 'Pinapayagan bang makauwi ang mga Pilipino na galing sa mga bansang may kumpirmadong kaso ng 2019-nCoV?',
          payload: `${PREFIX}_13`
        },
        {
          type: 'postback',
          title: 'Main Menu',
          payload: `MAIN_MENU`
        },
      ]
    })
  });

  bot.on(`postback:${PREFIX}_10`, (payload, chat) => {
    chat.say({
      text: `
      Ano ang dapat mong gawin kung ikaw ay naglakbay sa Wuhan, China kamakailan lamang at nagpapakita ng mga sintomas ng 2019-nCoV?
      Ang mga pasyente, lalo na ang mga manlalakbay, na nagpapakita ng sintomas ng 2019-nCoV ay dapat agad kumonsulta sa kanilang mga doktor.
      `,
      buttons: [{
          type: 'postback',
          title: 'Paglalakbay',
          payload: `${PREFIX}_10_13`
        },
        {
          type: 'postback',
          title: 'Mga kadalasang katanungan',
          payload: `${PREFIX}`
        },
        {
          type: 'postback',
          title: 'Main Menu',
          payload: `MAIN_MENU`
        },
      ]
    })
  });

  bot.on(`postback:${PREFIX}_11`, (payload, chat) => {
    chat.say({
      text: `
      Mayroon akong lagnat at ubo, pero hindi ako pumunta sa China kamakailan o nakipag-ugnayan sa sinumang nanggaling mula sa China. Ano ang gagawin ko?
      Sa kasong ito, hindi na kailangang magpa-test para sa 2019-nCoV. Kumonsulta agad sa iyong pinakamalapit na health facility para sa abisong medikal.
      `,
      buttons: [{
          type: 'postback',
          title: 'Paglalakbay',
          payload: `${PREFIX}_10_13`
        },
        {
          type: 'postback',
          title: 'Mga kadalasang katanungan',
          payload: `${PREFIX}`
        },
        {
          type: 'postback',
          title: 'Main Menu',
          payload: `MAIN_MENU`
        },
      ]
    })
  });

  bot.on(`postback:${PREFIX}_12`, (payload, chat) => {
    chat.say(`
    Mayroon bang travel restriction na ipapatupad?
Oo. Noong ika-2 ng Pebrero, 2020, inaprubahan ni Pangulong Rodrigo Roa Duterte ang temporary ban para sa kahit sinong tao (maliban sa mga Pilipino at mga may hawak ng PR resident visas na ini-issue ng Pilipinas) na direktang nagmula sa Tsina at mga Special Administrative Regions nito (Hongkong at Macau).
    `)
    chat.say({
      text: `
Pinaaalalahanan din ang iba pang mga nais maglakbay na iwasang magbiyahe sa mga lugar na mayroong mga kaso ng 2019-nCoV. Hinihikayat ang mga manlalakbay na sundin ang mga paalala at public health plans ng mga bansang kanilang bibisitahin; alamin ang mga ospital na pinakamalapit sa kanilang lugar; at manatiling nakatutok para sa mga bagong impormasyon at updates ukol sa naturang sakit.
      `,
      buttons: [{
          type: 'postback',
          title: 'Paglalakbay',
          payload: `${PREFIX}_10_13`
        },
        {
          type: 'postback',
          title: 'Mga kadalasang katanungan',
          payload: `${PREFIX}`
        },
        {
          type: 'postback',
          title: 'Main Menu',
          payload: `MAIN_MENU`
        },
      ]
    })
  });

  bot.on(`postback:${PREFIX}_13`, (payload, chat) => {
    chat.say(`
    Pinapayagan bang makauwi ang mga Pilipino na galing sa mga bansang may kumpirmadong kaso ng 2019-nCoV?
    `)
    chat.say({
      text: `
      Oo. Aalagaan at tututukan sila ng DOH sa kanilang pag-uwi. Sa kanilang pagdating, aalagaan at babantayan sila sa isang ospital o health facility sa loob ng 14 na araw. Kung mayroong karamdaman ang nasabing pasahero sa kanilang pagdating, hinihikayat sila na agarang sabihin ito sa mga quarantine medical officers na nasa airport o seaport.
      `,
      buttons: [{
          type: 'postback',
          title: 'Paglalakbay',
          payload: `${PREFIX}_10_13`
        },
        {
          type: 'postback',
          title: 'Mga kadalasang katanungan',
          payload: `${PREFIX}`
        },
        {
          type: 'postback',
          title: 'Main Menu',
          payload: `MAIN_MENU`
        },
      ]
    })
  });

  bot.on(`postback:${PREFIX}_14_15`, (payload, chat) => {
    chat.say({
      text: 'PAGRESPONDE ATBP',
      buttons: [{
          type: 'postback',
          title: 'Saan makakakuha ng impormasyon ang publiko ukol sa 2019-nCoV?',
          payload: `${PREFIX}_14`
        },
        {
          type: 'postback',
          title: 'Anong kasalukuyang ginagawa ng DOH at iba pang kaugnay na ahensya upang sugpuin ang pagkalat ng 2019-nCoV?',
          payload: `${PREFIX}_15`
        },
        {
          type: 'postback',
          title: 'Main Menu',
          payload: `MAIN_MENU`
        },
      ]
    })
  });

  bot.on(`postback:${PREFIX}_14`, (payload, chat) => {
    chat.say({
      text: `
      Saan makakakuha ng impormasyon ang publiko ukol sa 2019-nCoV?
      Inaanyayahan ang publiko na kumuha lamang ng impormasyon ukol sa 2019-nCoV mula sa opisyal na press release, website, at social media platforms (gaya ng Facebook at Twitter) ng DOH. Maging maingat din sa mga di-makatotohanang balita na kumakalat sa internet, at laging kumpirmahin ang pinanggagalingan ng iyong impormasyon.
      https://www.doh.gov.ph/2019-nCov
      `,
      buttons: [{
          type: 'postback',
          title: 'PAGRESPONDE ATBP',
          payload: `${PREFIX}_14_15`
        },
        {
          type: 'postback',
          title: 'Mga kadalasang katanungan',
          payload: `${PREFIX}`
        },
        {
          type: 'postback',
          title: 'Main Menu',
          payload: `MAIN_MENU`
        },
      ]
    })
  });

  bot.on(`postback:${PREFIX}_15`, (payload, chat) => {
    chat.say(`
    Anong kasalukuyang ginagawa ng DOH at iba pang kaugnay na ahensya upang sugpuin ang pagkalat ng 2019-nCoV?
    Masugid na binabantayan ng Kagawaran ng Kalusugan ang mga taong nagpakita ng senyales ng respiratory infection at may kasaysayan ng paglalakbay sa China. Nakikipag-ugnayan din ang DOH sa WHO at China Center for Disease Control para sa mga bagong detalye ukol sa virus.
    `);
    chat.say({
      text: `
Pinapagtibay din ng DOH ang kakayahan nito sa laboratory testing ng coronavirus, kahandaan ng mga hospital, rapid response, at risk communication at pagpapalaganap ng impormasyon. Namimigay na rin ng Personal Protective Equipment ang Bureau of Quarantine, Centers for Health Development, at mga hospital ng DOH.
Samantala, ang Bureau of Quarantine naman ay masugid na nakikipag-ugnayan sa mga airlines at paliparan upang palakasin ang border surveillance, habang ang Epidemiology Bureau naman ay mas lalo pang pinaghihigpit ang community surveillance nito.
      `,
      buttons: [{
          type: 'postback',
          title: 'PAGRESPONDE ATBP',
          payload: `${PREFIX}_14_15`
        },
        {
          type: 'postback',
          title: 'Mga kadalasang katanungan',
          payload: `${PREFIX}`
        },
        {
          type: 'postback',
          title: 'Main Menu',
          payload: `MAIN_MENU`
        },
      ]
    })
  });

}