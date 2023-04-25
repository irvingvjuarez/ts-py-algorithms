export const exceedingWordsLength = [
	"staunches",
	"compilations",
	"mickles",
	"overreacher",
	"duende",
	"juristically",
	"handedness",
	"sapphics",
	"accustomedness",
	"sarcology",
	"intermittent",
	"woesome",
	"dehorner",
	"bantamweights",
	"lenity",
	"sway",
	"fairyism",
	"safelight",
	"gippers",
	"sieverts",
	"blinkards",
	"underpants",
	"sewings",
	"amphidiploidies",
	"elvish",
	"obsolescence",
	"corrugates",
	"scrubwomen",
	"reduced",
	"atmometers",
	"harden",
	"gleams",
	"sholoms",
	"blazoner",
	"jouked",
	"richening",
	"overstimulate",
	"photomontages",
	"intorting",
	"cazique",
	"touchiest",
	"delimited",
	"yammering",
	"baboo",
	"remediating",
	"tailback",
	"carmagnoles",
	"minyanim",
	"elderberries",
	"hemophilias",
	"decarburizes",
	"fyces",
	"duotones",
	"halalas",
	"sambars",
	"narcoses",
	"orthodontist",
	"intercooler",
	"antireligion",
	"colorfulness",
	"befooled",
	"numeracies",
	"disputatiously",
	"estranging",
	"indecorums",
	"adjuratory",
	"spintos",
	"jauntiness",
	"tardive",
	"steapsin",
	"silica",
	"exorcism",
	"gainsaying",
	"cyclery",
	"venin",
	"snugger",
	"layoff",
	"merchantmen",
	"felsite",
	"paruras",
	"inexpertly",
	"hinged",
	"sorptions",
	"supervirtuoso",
	"folkmoot",
	"synonym",
	"emigrant",
	"pronghorns",
	"macaronic",
	"crenellation",
	"braches",
	"papyrus",
	"acridness",
	"eudemons",
	"syndets",
	"capuchins",
	"ambary",
	"whited",
	"wiggier",
	"reviewing",
	"superhumanness"
]

export const MIN_WORDS_LENGTH = 1;
export const MAX_WORDS_LENGTH = 100;
export const ORDER_LENGTH = 26;

export function wordsInvalid(wordsSize: number): boolean {
	const ltWordsLength = wordsSize < MIN_WORDS_LENGTH;
	const gtWordsLength = wordsSize > MAX_WORDS_LENGTH;

	return ltWordsLength || gtWordsLength
}

export function orderInvalid(orderSize: number): boolean {
	return orderSize != ORDER_LENGTH;
}

export function onlyOneWord(wordsSize) {
	return wordsSize === 1
}

export function getHashmap(str: string) {
	const hashmap = {}
	str.split("").forEach((char, index) => hashmap[char] = index + 1)

	return hashmap
}

export function getInitialPointers() {
	const pointerTemplate = {word: 0, char: 0, charValue: 0}

	const master = Object.assign({}, pointerTemplate)
	const slave = Object.assign({}, pointerTemplate)
	slave.word = 1

	return { master, slave }
}

export const updateCharValues = ({words, CHAR_INDEX, master, slave}) => {
	// Assigning charValue prop to each pointer
	const masterCurrentChar = words[master.word][master.char]
	master.charValue = CHAR_INDEX[masterCurrentChar]

	const slaveCurrentChar = words[slave.word][slave.char]
	slave.charValue = CHAR_INDEX[slaveCurrentChar]
}

export function areValidWords(master, slave, WORDS_LENGTH) {
	const masterPointingToValidWord = master.word + 1 <= WORDS_LENGTH;
	const slavePointingToValidWord = slave.word + 1 <= WORDS_LENGTH;
	return masterPointingToValidWord && slavePointingToValidWord;
}

export function isLexicographOrdered(master, slave) {
	return master.charValue <= slave.charValue
}

export function updateValidations(validations, master, slave, WORDS_LENGTH) {
	validations.validWords = areValidWords(master, slave, WORDS_LENGTH);
	validations.lexicographicOrder = isLexicographOrdered(master, slave);
}

export function getPointersWordLength(master, slave, words) {
	const masterWordLength = words[master.word].length
	const slaveWordLength = words[slave.word].length

	return { masterWordLength, slaveWordLength }
}

export function areCharactersValid(master, slave, words) {
	const { masterWordLength, slaveWordLength } = getPointersWordLength(master, slave, words)

	const masterPointingToValidChar = master.char < masterWordLength
	const slavePointingToValidChar = slave.char < slaveWordLength

	const validChars = masterPointingToValidChar && slavePointingToValidChar
	const isValidLength = masterWordLength <= slaveWordLength

	return { validChars, isValidLength }
}