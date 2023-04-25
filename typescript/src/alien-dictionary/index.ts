import { wordsInvalid, orderInvalid, onlyOneWord, getHashmap, getInitialPointers, updateCharValues, updateValidations, areCharactersValid } from "./utils"

async function alienDictionary(words: string[], order: string) {
	const WORDS_LENGTH = words.length;
	const ORDER_LENGTH = order.length

	// Initial validations
	if (wordsInvalid(WORDS_LENGTH) || orderInvalid(ORDER_LENGTH)) {
		const errorParam = orderInvalid(ORDER_LENGTH) ? "order" : "words"
		throw new Error(`Invalid ${errorParam} length`)
	}

	// Declaring the result as true by default
	let result: boolean | null = true

	// If it has only one word, return true as default
	if (onlyOneWord(WORDS_LENGTH)) return result

	// Creation of hash map
	const CHAR_INDEX = getHashmap(order)

	// Creation of the pointers
	const { master, slave } = getInitialPointers()

	// Initializing charValues
	updateCharValues({words, CHAR_INDEX, master, slave})

	// Declaring validations
	const validations: {[key: string]: boolean | null} = {
		validWords: null,
		lexicographicOrder: null
	}


	// Declaring validations
	updateValidations(validations, master, slave, WORDS_LENGTH)
	result = validations.lexicographicOrder

	// Loop
	while(validations.validWords && validations.lexicographicOrder) {
		// Data updated
		master.char += 1;
		slave.char += 1;

		// Data validation
		const { validChars, isValidLength } = areCharactersValid(master, slave, words)

		if (validChars) {
			// Updating validations
			updateValidations(validations, master, slave, WORDS_LENGTH)
			result = validations.lexicographicOrder

			// Update char values
			updateCharValues({words, CHAR_INDEX, master, slave})

		} else {
			// Validating words length

			if (isValidLength) {
				// Updating pointers
				master.word += 1;
				master.char = 0;

				slave.word += 1;
				slave.char = 0;

				// Updating validations
				updateValidations(validations, master, slave, WORDS_LENGTH)
				result = validations.lexicographicOrder

				if (validations.validWords) {
					// Update the charValues
					updateCharValues({words, CHAR_INDEX, master, slave})
				}
			} else {
				// Finishing the program
				master.charValue = 1;
				slave.charValue = 0;

				// Updating validations
				updateValidations(validations, master, slave, WORDS_LENGTH)
				result = validations.lexicographicOrder
			}
		}
	}

	return result
}

export default alienDictionary