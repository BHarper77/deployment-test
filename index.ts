try {
	logMessage("hello world")
	
	logMessage("processing")
	
	logMessage("goodbye world")
} catch (error) {
	logError(error)
}

function logError(message: string) {
	throw new Error(message)
}

function logMessage(message: string) {
	console.log(message)
}