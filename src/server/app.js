const app = require("./index");

let PORT = process.env.PORT || 8083;

// Setup Server
app.listen( PORT , () => {
    console.log(`Server Running on port ${PORT}`)
})
