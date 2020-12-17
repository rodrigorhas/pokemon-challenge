import {StatusCode} from "./routes/resources/status-code";
import {ValidationError} from "sequelize";

export const env = process.env.NODE_ENV || 'development';

const validationErrorHandler = (request, response, exception) => {
    const errors = exception.errors;

    const formattedErrors = errors.reduce((result, error) => {
        console.log(error)
        const {path: field, validatorKey: type, value} = error

        const options = error.validatorArgs && error.validatorArgs.length ? error.validatorArgs[0] : null

        const throwableContent = {
            message: error.message,
            value,
            type,
        };

        if (options) {
            throwableContent['options'] = options
        }

        result[field] = throwableContent

        return result;
    }, {});

    response.status(StatusCode.UNPROCESSABLE_ENTITY).send({
        id: 'validation_failed',
        message: 'Validation error',
        meta: {
            errors: formattedErrors
        }
    })
}

export const errorHandler = (request, response) => (exception) => {
    if (exception instanceof ValidationError) {
        return validationErrorHandler(request, response, exception)
    }

    // throw if there is not handler
    response.error(exception)
}