const MIN_WORDS_LENGTH = 1;
const MAX_WORDS_LENGTH = 100;
const ORDER_LENGTH = 26;

async function alienDictionary(words: string[], order: string) {
	const WORDS_LENGTH = words.length;

	const ltWordsLength = WORDS_LENGTH < MIN_WORDS_LENGTH;
	const gtWordsLength = WORDS_LENGTH > MAX_WORDS_LENGTH;
	const wordsLengthValidations = ltWordsLength || gtWordsLength
	const invalidOrderLength = order.length != ORDER_LENGTH;

	if (wordsLengthValidations || invalidOrderLength) {
		const errorParam = invalidOrderLength ? "order" : "words"
		throw new Error(`Invalid ${errorParam} length`)
	}

	// Declaring the result as true by default
	let result = true

	// Creation of hash map
	const WORDS_INDEX = {}
	words.forEach((word, index) => WORDS_INDEX[word] = index + 1)

	// Creation of the pointers
	const master = { word: 0, char: 0, charValue: 0 }
	const slave = { word: 1, char: 0, charValue: 0 }

	// Assigning charValue prop to each pointer
	const masterCurrentChar = words[master.word][master.char]
	master.charValue = WORDS_INDEX[masterCurrentChar]

	const slaveCurrentChar = words[slave.word][slave.char]
	slave.charValue = WORDS_INDEX[slaveCurrentChar]

	// Initializing validations
	let masterPointingToValidWord, slavePointingToValidWord, validWords, lexicographicOrder

	// methods
	const updateValidations = () => {
		masterPointingToValidWord = master.word + 1 <= WORDS_LENGTH;
		slavePointingToValidWord = slave.word + 1 <= WORDS_LENGTH;
		validWords = masterPointingToValidWord && slavePointingToValidWord;

		lexicographicOrder = master.charValue < slave.charValue;
	}

	// Declaring validations
	updateValidations()

	// Loop
	while(validWords && lexicographicOrder) {
		// TODO: logging master and slave current char values

		// Data updated
		master.char += 1;
		slave.char += 1;

		// Data validation
		const masterWordLength = words[master.word].length
		const slaveWordLength = words[slave.word].length

		const masterPointingToValidChar = master.char <= masterWordLength
		const slavePointingToValidChar = slave.char <= slaveWordLength
		const validChars = masterPointingToValidChar && slavePointingToValidChar

		if (validChars) {
			// Validating words length
			const isValidLength = masterWordLength < slaveWordLength;

			if (isValidLength) {
				// Updating pointers
				master.word += 1;
				master.char = 0;

				slave.word += 1;
				slave.char = 0;

				// TODO: repeated code (must be optimized)
				const masterCurrentChar = words[master.word][master.char]
				master.charValue = WORDS_INDEX[masterCurrentChar]

				const slaveCurrentChar = words[slave.word][slave.char]
				slave.charValue = WORDS_INDEX[slaveCurrentChar]
			} else {
				// Finishing the program
				result = false
				master.charValue = 1;
				slave.charValue = 0;
			}
		} else {
			// Updating validations
			updateValidations()
		}
	}

	return result
}

export default alienDictionary