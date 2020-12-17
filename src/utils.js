import {StatusCode} from "./resources/status-code";
import {ValidationError} from "sequelize";
import {validationResult} from "express-validator";

export const env = process.env.NODE_ENV || 'development';

const renameKeys = (keysMap, obj) =>
    Object.keys(obj).reduce(
        (acc, key) => ({
            ...acc,
            ...{[keysMap[key] || key]: obj[key]}
        }),
        {}
    );

/**
 * Common validation handler
 */
const validationErrorHandler = (request, response, exception) => {
    const errors = exception.errors;

    const formattedErrors = errors.reduce((result, error) => {
        const {path: field, validatorKey: type, value} = error

        const options = error.validatorArgs && error.validatorArgs.length ? error.validatorArgs[0] : null

        const throwableContent = {
            field,
            value,
            type,
            message: error.message
        };

        if (options) {
            throwableContent['options'] = options
        }

        result.push(throwableContent)

        return result;
    }, []);

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

/**
 * Request Schema Validation Middleware Helper
 */
const executeValidationsMiddleware = (req, res, next) => {
    const errors = validationResult(req);

    const mapErrors = (items = []) =>
        items.map((error) => renameKeys({msg: 'message', param: 'field'}, error))

    if (!errors.isEmpty()) {
        return res.status(400).json({
            id: 'validation_failed',
            message: 'Validation error',
            meta: {
                errors: mapErrors(errors.array())
            }
        });
    }

    next();
}

export const useSchemaValidation = (validations = []) => [...validations, executeValidationsMiddleware]