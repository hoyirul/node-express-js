const index = (req, res) => {
    const data = [
        {
            id: 1,
            name: "Mochammad Hairullah",
            email: "moch@gmail.com"
        },
        {
            id: 2,
            name: "Mochammad Hairullah2",
            email: "moch@gmail.com2"
        }
    ]
    res.json({
        message: "success",
        data: data
    })
}

const store = (req, res) => {
    console.log(req.body);
    res.json({
        message: "success",
        data: req.body
    });
}

const update = (req, res) => {
    const {id} = req.params;
    console.log("id: ", id);
    res.json({
        message: "success",
        data: req.body
    });
}

const destroy = (req, res) => {
    const {id} = req.params;
    console.log("id: ", id);
    res.json({
        message: "success",
        data: req.body
    });
}

module.exports = {
    index, store, update, destroy
}