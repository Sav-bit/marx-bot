const Telegraf = require('telegraf');
const rateLimit = require('telegraf-ratelimit');
const limitConfig = {
  window: 5000,
  limit: 4,
  onLimitExceeded: (ctx, next) => ctx.reply('State sprecando il NOSTRO tempo, abbiamo anche altro da fare oltre che correggere messaggi.')
}

const bot = new Telegraf(process.env.token);
bot.use(rateLimit(limitConfig))
const my = /my/gi;
const mio = /(?<=(\W|^))((mio|tuo|suo|vostro)o*)(?=(\W|$))/gi;
const mia = /(?<=(\W|^))((mia|tua|sua|vostra)a*)(?=(\W|$))/gi;
const miei = /(?<=(\W|^))((miei|tuoi|suoi|vostri)i*)(?=(\W|$))/gi;
const mie = /(?<=(\W|^))((mie|tue|sue|vostre)e*)(?=(\W|$))/gi;

bot.start((ctx) => ctx.reply('Mi fa piacere essere qui compagni.'));


bot.on(['message', 'video', 'photo'], (ctx) => {
  let msg = ctx.message.text || ctx.message.caption;
  let chat = ctx.chat.id;
  try{
  let noSpace = / /gi;
  let simpsonref = msg.replace(noSpace,'');
  //console.log(simpsonref);
  if(simpsonref.toLowerCase().includes('unionesovietica?manonsieradisciolta?')) ctx.reply('Si, è questo che volevamo farvi credere *preme bottone*');
  //english part
  let nms = msg.replace(my,'OUR');

  //italian part
  nms = nms.replace(mio, 'NOSTRO');
  nms = nms.replace(mia, 'NOSTRA');
  nms = nms.replace(miei, 'NOSTRI');
  nms = nms.replace(mie, 'NOSTRE');

  if(nms.localeCompare(msg) != 0)

  ctx.reply(nms+'*');
  //send(chat, nms+"*");

}catch(e){console.log(e)}
});

bot.launch();
