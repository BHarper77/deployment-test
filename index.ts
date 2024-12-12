try {
	logMessage("hello world")
	
	logMessage("processing")
	
	logMessage("goodbye world")
} catch (error) {
	logError(error)
}

/** Logs errors */
function logError(message: string) {
	throw new Error(message)
}

/** Logs messages */
function logMessage(message: string) {
	console.log(message)
}