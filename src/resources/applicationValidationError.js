export class ApplicationValidationError {
    constructor() {
        this.id = 'validation_failed'
        this.message = 'Validation error'
        this.meta = {errors: []}
    }

    addError(error) {
        this.meta.errors.push(error)
        return this;
    }

    addErrors(errors) {
        this.meta.errors.push(...errors)
        return this;
    }
}