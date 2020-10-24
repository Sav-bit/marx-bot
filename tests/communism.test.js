const { marxify } = require('../communism');

test('Correct export', () => {
	expect(marxify).not.toBe(undefined);
});

test('English OUR correction', () => {
	expect(marxify('my')).toBe('OUR');
	expect(marxify('my car your house')).toBe('OUR car OUR house');
	expect(marxify('my mine their hers his your')).toBe('OUR OUR OUR OUR OUR OUR');
	expect(marxify('a swedish house')).toBe('a swedish house');
});

test('Italian NOSTRO correction', () => {
	expect(marxify('Mio tuO sUo vostrO')).toBe('NOSTRO NOSTRO NOSTRO NOSTRO');
	expect(marxify('mio tuo suo vostro')).toBe('NOSTRO NOSTRO NOSTRO NOSTRO');
});

test('Italian NOSTRA correction', () => {
	expect(marxify('mia tua sua vostra')).toBe('NOSTRA NOSTRA NOSTRA NOSTRA');
	expect(marxify('La mia macchina')).toBe('La NOSTRA macchina');
	expect(marxify('La sua macchina')).toBe('La NOSTRA macchina');
	expect(marxify('La tua macchina')).toBe('La NOSTRA macchina');
	expect(marxify('La tuatua macchina')).toBe('La tuatua macchina');
	expect(marxify('La tua macchina, la sua ragazza')).toBe('La NOSTRA macchina, la NOSTRA ragazza');
	expect(marxify('La vostra macchina, la sua ragazza')).toBe('La NOSTRA macchina, la NOSTRA ragazza');
});

test('Italian NOSTRI correction', () => {
	expect(marxify('miei tuoi suoi vostri')).toBe('NOSTRI NOSTRI NOSTRI NOSTRI');
	expect(marxify('I miei casi di test')).toBe('I NOSTRI casi di test');
	expect(marxify('I suoi casi di test')).toBe('I NOSTRI casi di test');
	expect(marxify('I tuoi casi di test')).toBe('I NOSTRI casi di test');
	expect(marxify('I tuoituoi casi di test')).toBe('I tuoituoi casi di test');
	expect(marxify('I tuoi casi di test, i suoi cani')).toBe('I NOSTRI casi di test, i NOSTRI cani');
	expect(marxify('I vostri casi di test, i suoi cani')).toBe('I NOSTRI casi di test, i NOSTRI cani');
});

test('Italian NOSTRE correction', () => {
	expect(marxify('mie tuE suE vostrE')).toBe('NOSTRE NOSTRE NOSTRE NOSTRE');
	expect(marxify('mie tue sue vostre')).toBe('NOSTRE NOSTRE NOSTRE NOSTRE');
});

test('Edgecases', () => {
	expect(marxify('a?')).toBe('a?');
	expect(marxify('a? e!')).toBe('a? e!');
	expect(marxify('È')).toBe('È');
	expect(marxify('')).toBe('');
	expect(marxify(' ')).toBe(' ');
});