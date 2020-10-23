const my = /(?<!\w)(my|mine|their|hers|his|your)(?=\s|$)/gi;
const mio = /(?<!\w)(mio|tuo|suo|vostro)(?=\s|$)/gi;
const mia = /(?<!\w)(mia|tua|sua|vostra)(?=\s|$)/gi;
const miei = /(?<!\w)(miei|tuoi|suoi|vostri)(?=\s|$)/gi;
const mie = /(?<!\w)(mie|tue|sue|vostre)(?=\s|$)/gi;

// Record last time WE sent a message
let lastTime=Date.now();
// Set an average of 10 messages per week
//  converted to messages per millisecond
const messageRate=10 / (7*24*60*60*1000);

module.exports = {
	marxify: (msg) => {
		let timeNow=Date.now();
		let sinceLast=timeNow-lastTime;
		let probOfThisMessage=1-Math.exp(-messageRate * sinceLast);
		
		// Will WE send it?
		if(Math.random() < probOfThisMessage){
			// Update the last time
			lastTime=timeNow;

			let nms = msg.replace(my, 'OUR');
	
			//italian part
			nms = nms.replace(mio, 'NOSTRO');
			nms = nms.replace(mia, 'NOSTRA');
			nms = nms.replace(miei, 'NOSTRI');
			nms = nms.replace(mie, 'NOSTRE');
		}
		else{
			nms=0;
		}

		return nms;
	}
}