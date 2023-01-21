const logRequest = (req, res, next) => {
    console.log('Uri : ', req.path);
    next();
}

module.exports = {
    logRequest,
}