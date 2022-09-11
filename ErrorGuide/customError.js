class thisError extends Error{
    constructor(message){
        super(message)
        this.name = this.constructor.name;
    }
  
}

class ForbiddenError extends thisError {
    
    constructor(message) {
        super(`you are not the writter of this ${message}`)
    }
}


class NotFoundError extends thisError{
    constructor(property, message="") {
        super(`${property} not found ${message}`)
    }
}

class unauthorizedError extends thisError {
    constructor(){
        super("you need to login first")
    }
}

class FieldRequiredError extends thisError{
    constructor(message){
        super(`${message} is required`)
    }
}
class ValidationError extends thisError{
    constructor(property, message){
        super(`${property} is not valid.. ${message}`)
    }
}

class AlreadyTakenError extends thisError{
    constructor(property, message=""){
        super(`${property} already exists.. ${message}`)
    }
}

module.exports={
    AlreadyTakenError,
    FieldRequiredError,
    unauthorizedError,
    NotFoundError,
    ForbiddenError,
    ValidationError
}