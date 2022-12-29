const errorHandler = (error, req, res, next) => {
    if (error.name === 'ValidationError') {
        return res.status(400).send({
            type: "ValidationError",
            details: error.details
        })
    }

    if (error instanceof AppError) {
        return res.status(erro.statusCode).json({
            errorCode: errorCode
        })
    }

    return res.status(200).send(error.message)
}

module.exports = errorHandler