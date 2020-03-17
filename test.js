const cheerio = require('cheerio');
const cheerioTableparser = require('cheerio-tableparser');
const request = require('request');
const fs = require('fs');

const cacheManager = require('cache-manager');
const memoryCache = cacheManager.caching({store: 'memory', max: 100, ttl: 10800/*seconds*/}); //3hours

(async ()=>{
  await new Promise((resolve) => {
    getStats('stats', (err, data)=>{

      // console.log('1', formatpuisInPh(data));
      // console.log('2', formatInfobox(data));
      console.log('2', formatlockdown(data));

    });
  });  
})()


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
  for(i=3; i<19;i++){
    formatted += `
      ${puis[0][i]} | ${parseInt(puis[1][i]) + parseInt(puis[3][i])} | ${parseInt(puis[2][i]) + parseInt(puis[5][i])} | ${puis[4][i]} | ${puis[6][i]}
    `;
  }
  return formatted;
}

function formatlockdown(data = {}){
  let formatted = 'Local Government|StartDate|Cases|Deaths|Recovered';
  let lockdown = data['lockdown'];
  for(i=3; i<lockdown[0].length - 3;i++){
    formatted += `
      ${lockdown[0][i]} | ${lockdown[2][i]} | ${lockdown[4][i]} | ${lockdown[5][i]} | ${lockdown[6][i]} | 
    `;
  }
  return formatted;
}

// function removeStyles(el) {
//   el.removeAttribute('style');

//   if(el.childNodes.length > 0) {
//       for(var child in el.childNodes) {
//           /* filter element nodes only */
//           if(el.childNodes[child].nodeType == 1)
//               removeStyles(el.childNodes[child]);
//       }
//   }
// }

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
