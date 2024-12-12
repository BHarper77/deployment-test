console.log("hello world")

console.log("processing")
await new Promise((resolve) => setTimeout(resolve, 1000))

console.log("goodbye world")
