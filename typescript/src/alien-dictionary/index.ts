const MIN_WORDS_LENGTH = 1;
const MAX_WORDS_LENGTH = 100;
const ORDER_LENGTH = 26;

function wordsInvalid(wordsSize: number): boolean {
	const ltWordsLength = wordsSize < MIN_WORDS_LENGTH;
	const gtWordsLength = wordsSize > MAX_WORDS_LENGTH;

	return ltWordsLength || gtWordsLength
}

function orderInvalid(orderSize: number): boolean {
	return orderSize != ORDER_LENGTH;
}

function onlyOneWord(wordsSize) {
	return wordsSize === 1
}

function getHashmap(str: string) {
	const hashmap = {}
	str.split("").forEach((char, index) => hashmap[char] = index + 1)

	return hashmap
}

function getInitialPointers() {
	const pointerTemplate = {word: 0, char: 0, charValue: 0}

	const master = Object.assign({}, pointerTemplate)
	const slave = Object.assign({}, pointerTemplate)
	slave.word = 1

	return { master, slave }
}

const updateCharValues = ({words, CHAR_INDEX, master, slave}) => {
	// Assigning charValue prop to each pointer
	const masterCurrentChar = words[master.word][master.char]
	master.charValue = CHAR_INDEX[masterCurrentChar]

	const slaveCurrentChar = words[slave.word][slave.char]
	slave.charValue = CHAR_INDEX[slaveCurrentChar]
}

function areValidWords(master, slave, WORDS_LENGTH) {
	const masterPointingToValidWord = master.word + 1 <= WORDS_LENGTH;
	const slavePointingToValidWord = slave.word + 1 <= WORDS_LENGTH;
	return masterPointingToValidWord && slavePointingToValidWord;
}

function isLexicographOrdered(master, slave) {
	return master.charValue <= slave.charValue
}

async function alienDictionary(words: string[], order: string) {
	const WORDS_LENGTH = words.length;
	const ORDER_LENGTH = order.length

	// Initial validations
	if (wordsInvalid(WORDS_LENGTH) || orderInvalid(ORDER_LENGTH)) {
		const errorParam = orderInvalid(ORDER_LENGTH) ? "order" : "words"
		throw new Error(`Invalid ${errorParam} length`)
	}

	// Declaring the result as true by default
	let result = true

	// If it has only one word, return true as default
	if (onlyOneWord(WORDS_LENGTH)) return result

	// Creation of hash map
	const CHAR_INDEX = getHashmap(order)

	// Creation of the pointers
	const { master, slave } = getInitialPointers()

	// Initializing charValues
	updateCharValues({words, CHAR_INDEX, master, slave})

	// Declaring validations
	let validWords, lexicographicOrder

	// methods
	const updateValidations = () => {
		validWords = areValidWords(master, slave, WORDS_LENGTH);
		lexicographicOrder = isLexicographOrdered(master, slave);

		if (!lexicographicOrder) {
			result = false
		}
	}


	// Declaring validations
	updateValidations()

	// Loop
	while(validWords && lexicographicOrder) {
		// Data updated
		master.char += 1;
		slave.char += 1;

		// Data validation
		const masterWordLength = words[master.word].length
		const slaveWordLength = words[slave.word].length

		const masterPointingToValidChar = master.char < masterWordLength
		const slavePointingToValidChar = slave.char < slaveWordLength
		const validChars = masterPointingToValidChar && slavePointingToValidChar

		if (validChars) {
			// Updating validations
			updateValidations()

			// Update char values
			updateCharValues({words, CHAR_INDEX, master, slave})

		} else {
			// Validating words length
			const isValidLength = masterWordLength <= slaveWordLength;

			if (isValidLength) {
				// Updating pointers
				master.word += 1;
				master.char = 0;

				slave.word += 1;
				slave.char = 0;

				// Updating validations
				updateValidations()

				if (validWords) {
					// Update the charValues
					updateCharValues({words, CHAR_INDEX, master, slave})
				}
			} else {
				// Finishing the program
				master.charValue = 1;
				slave.charValue = 0;

				// Updating validations
				updateValidations()
			}
		}
	}

	return result
}

export default alienDictionary