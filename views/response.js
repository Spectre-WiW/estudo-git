const successResponse = ( reply, data, statusCode = 200) => {
    reply.code(statusCode).send({
        success: true,
        data
    });
};

module.exports = { successResponse};