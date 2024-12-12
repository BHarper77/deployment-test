try {
	console.log("hello world")
	
	console.log("processing")
	
	console.log("goodbye world")
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