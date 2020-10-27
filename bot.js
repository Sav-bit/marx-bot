const Telegraf = require('telegraf');
const rateLimit = require('telegraf-ratelimit');
const bot = new Telegraf(process.env.token);
const { marxify } = require('./communism');

// Record last time WE sent a message as correction
let lastTime = Date.now();
// Set an average of 10 messages per hour
//  converted to messages per millisecond
const messageRate = 10 / (60 * 60 * 1000);

bot.use(rateLimit({
	window: 60 * 60 * 1000,
	limit: 10,
	onLimitExceeded: (ctx, next) => {
		let timeNow = Date.now();
		let sinceLast = timeNow - lastTime;
		let probOfThisMessage = 1 - Math.exp(-messageRate * sinceLast);
		if (Math.random() <= probOfThisMessage) {
			lastTime = timeNow;
			next();
		} else if (sinceLast < 10000) {
			let msg = ctx.message.text || ctx.message.caption;
			let nms = marxify(msg);
			if (nms.localeCompare(msg) != 0)
				ctx.reply('State sprecando il NOSTRO tempo, abbiamo anche altro da fare oltre che correggere messaggi.');
		}
	}
}));

bot.start((ctx) => ctx.reply('Mi fa piacere essere qui kompagni.'));

bot.on(['message', 'video', 'photo'], (ctx) => {
	let msg = ctx.message.text || ctx.message.caption;
	try {
		let simpsonref = msg.replace(/ /gi, '');
		if (simpsonref.toLowerCase().includes('unionesovietica?manonsieradisciolta?')) ctx.reply('Si, è questo che volevamo farvi credere *preme bottone*');
		let nms = marxify(msg);
		if (nms.localeCompare(msg) != 0)
			ctx.reply(nms + ' *'); // Inviamo la NOSTRA correzzione
	} catch (e) { console.log(e) }
});

bot.launch();
