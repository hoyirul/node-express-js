const index = (req, res) => {
    res.json([
        {
            name: "Mochammad Hairullah",
            email: "moch@gmail.com"
        }
    ])
}

const store = (req, res) => {
    res.json([
        {
            message: "201",
        }
    ])
}

module.exports = {
    index, store
}