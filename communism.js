const my = /(?<!\w)(my|mine|their|hers|his|your)(?=\s|$)/gi;
const mio = /(?<!\w)(mio|tuo|suo|vostro)(?=\s|$)/gi;
const mia = /(?<!\w)(mia|tua|sua|vostra)(?=\s|$)/gi;
const miei = /(?<!\w)(miei|tuoi|suoi|vostri)(?=\s|$)/gi;
const mie = /(?<!\w)(mie|tue|sue|vostre)(?=\s|$)/gi;
const nasz = /(?<!\w)(mój|moj|twój|twoj|jej|jego|wasz|ich)(?=\s|$)/gi;
const nuestro = /(?<!\w)(mi|tu|vuestro|su)(?=\s|$)/gi;
const nuestros = /(?<!\w)(mis|tus|vuestros|sus)(?=\s|$)/gi;
const nuestra = /(?<!\w)(vuestra)(?=\s|$)/gi;
const nuestras = /(?<!\w)(vuestras)(?=\s|$)/gi;
const unser = /(?<!\w)(mein|dein|sein|ihr|euer)(?=\s|$)/gi;
const unsere = /(?<!\w)(meine|deine|seine|ihre|eure|euere)(?=\s|$)/gi;
const notre = /(?<!\w)(mon|ma|ton|ta|son|sa|votre|leur)(?=\s|$)/gi;
const nos = /(?<!\w)(mes|tes|ses|vos|leurs)(?=\s|$)/gi;

module.exports = {
	marxify: (msg) => {
		// English part
		let nms = msg.replace(my, 'OUR');
		// Italian part
		nms = nms.replace(mio, 'NOSTRO');
		nms = nms.replace(mia, 'NOSTRA');
		nms = nms.replace(miei, 'NOSTRI');
		nms = nms.replace(mie, 'NOSTRE');
		// Polish part
		nms = nms.replace(nasz, 'NASZ');
		//Spanish part
		nms = nms.replace(nuestro, 'NUESTRO');
		nms = nms.replace(nuestros, 'NUESTROS');
		nms = nms.replace(nuestra, 'NUESTRA');
		nms = nms.replace(nuestras, 'NUESTRAS');
		// German part
		nms = nms.replace(unser, 'UNSER');
		nms = nms.replace(unsere, 'UNSERE');
		// French part
		nms = nms.replace(notre, 'NOTRE');
		nms = nms.replace(nos, 'NOS');
		return nms;
	}
}