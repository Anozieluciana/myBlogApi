const { unauthorizedError, ForbiddenError, NotFoundError, ValidationError } = require("../ErrorGuide/customError")

const errorHandler = (error, req, res, next)=>{
    console.log("\x1b[31m%s\x1b[0m", "▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼");
    
    if(error instanceof unauthorizedError){
        console.log(error);
        res.status(401).json ({error: {body: [error.message]}})
    }
    else if(error instanceof ForbiddenError ){
        console.log(error);
        res.status(403).json({ errors: { body: [error.message] } });
    }
    else if(error instanceof NotFoundError){
        console.log(error);
        res.status(404).json({error: {body:[error.message]}})
    }
    else if (error instanceof ValidationError){
        console.log(error);
        res.status(404).json({error:{body:[error.message]}})
    }
    else{
        res.status(500).json({error: {body: [error.message]}})
    }
    console.log("\x1b[31m%s\x1b[0m", "▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼");
}


module.exports = errorHandler