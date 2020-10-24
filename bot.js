const Telegraf = require('telegraf');
const rateLimit = require('telegraf-ratelimit');
const bot = new Telegraf(process.env.token);
const { marxify } = require('./communism');

// Record last time WE sent a message as correction
let lastTime=Date.now();
// Set an average of 10 messages per week
//  converted to messages per millisecond
const messageRate=10 / (7*24*60*60*1000);

bot.use(rateLimit({
	window: 30000,
	limit: 6,
	onLimitExceeded: (ctx, next) => ctx.reply('State sprecando il NOSTRO tempo, abbiamo anche altro da fare oltre che correggere messaggi.')
}));

bot.start((ctx) => ctx.reply('Mi fa piacere essere qui compagni.'));

bot.on(['message', 'video', 'photo'], (ctx) => {
	let msg = ctx.message.text || ctx.message.caption;
	let chat = ctx.chat.id;
	try {
		let noSpace = / /gi;
		let simpsonref = msg.replace(noSpace, '');
		//console.log(simpsonref);
		if (simpsonref.toLowerCase().includes('unionesovietica?manonsieradisciolta?')) ctx.reply('Si, è questo che volevamo farvi credere *preme bottone*');

		let timeNow=Date.now();
		let sinceLast=timeNow-lastTime;
		let probOfThisMessage=1-Math.exp(-messageRate * sinceLast);
		
		// Will WE send it?
		if(Math.random() < probOfThisMessage){
			// Update the last time
			lastTime=timeNow;

			let nms = marxify(msg);
		}

		if (nms.localeCompare(msg) != 0)

			ctx.reply(nms + '*');
		//send(chat, nms+"*");

	} catch (e) { console.log(e) }
});

bot.launch();
