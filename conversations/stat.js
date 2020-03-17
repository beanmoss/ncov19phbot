const cheerio = require('cheerio');
const cheerioTableparser = require('cheerio-tableparser');
const request = require('request');
const cacheManager = require('cache-manager');
const memoryCache = cacheManager.caching({store: 'memory', max: 100, ttl: 10800/*seconds*/}); //3hours

const PREFIX = 'STATS';

module.exports = (bot) => {

  bot.hear('stats', (payload, chat) => {
    stats(payload, chat);
  });

  bot.on('postback:STATS', (payload, chat) => {
    stats(payload, chat);
  })

}

function stats(payload, chat){
  getStats('stats', (err, data) => {
    chat.say('Philippine Stats').then(()=>{
      chat.say(formatInfobox(data)).then(() => {
        chat.say('Current number of patients under investigation (PUIs) in the Philippines').then(()=>{
          chat.say(formatpuisInPh(data)).then(()=>{
            chat.say(`Local government units under partial lockdown\nLocal Government|StartDate|Cases|Deaths|Recovered`).then(()=>{
              const lockdown =  formatlockdown(data);
              const splits = chunkSubstr(lockdown, 2000);
              splits.forEach(split => {
                chat.say(split).then(()=>{
                  chat.say('Type help or stats to continue...')
                })
              })
            })
          });
        });
      });
    });
  })
}

function chunkSubstr(str, size) {
  const numChunks = Math.ceil(str.length / size)
  const chunks = new Array(numChunks)

  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size)
  }

  return chunks
}

function formatInfobox(data = {}){
  let formatted = '';
  for(i=1; i<11;i++){
    formatted += `
${data['infoBox'][0][i]}: ${data['infoBox'][1][i]}
    `;
  }
  return formatted;
}

function formatpuisInPh(data = {}){
  let formatted = 'Regions|Admitted|Deaths|Recoveries|Total';
  let puis = data['puisInPh'];
  let limit = puis[0].length - 3;
  for(i=3; i<limit;i++){
    formatted += `
${puis[0][i]} | ${parseInt(puis[1][i]) + parseInt(puis[3][i])} | ${parseInt(puis[2][i]) + parseInt(puis[5][i])} | ${puis[4][i]} | ${puis[6][i]}
    `;
  }
  return formatted;
}

function formatlockdown(data = {}){
  let formatted = '';
  let lockdown = data['lockdown'];
  let limit = lockdown[0].length - 3;
  for(i=3; i<limit;i++){
    formatted += `
  ${lockdown[0][i]} | ${lockdown[2][i]} | ${lockdown[4][i]} | ${lockdown[5][i]} | ${lockdown[6][i]} | 
    `;
  }
  return formatted;
}

function getStats(id, cb = ()=>{}) {
  var cacheKey = 'user_' + id;
  memoryCache.wrap(cacheKey, function (cacheCb) {
    request('https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_the_Philippines#Statistics', (err, res, body) => {
      let $ = cheerio.load(body);
      let data = {};
      cheerioTableparser($);
      data.infoBox = $('#mw-content-text > div > table.infobox').parsetable(false, false, true);
      data.puisInPh = $('#mw-content-text > div > div.center > table').parsetable(false, false, true);
      data.lockdown = $('#mw-content-text > div > table.wikitable.mw-collapsible.autocollapse').parsetable(false, false, true);
      cacheCb(null, data);
    })
  }, cb);
}