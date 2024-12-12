try {
	logMessage("hello world")
	
	logMessage("processing")
	
	logMessage("goodbye world")
} catch (error) {
	logError(error)
}

/** Logs errors */
function logError(message: string) {
	console.error(message)
	throw new Error(message)
}

/** Logs messages */
function logMessage(message: string) {
	console.log("Message from process")
	console.log(message)
}