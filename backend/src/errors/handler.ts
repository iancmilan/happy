import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
    [key: string]: string[];

    // Esse é o formato que quero retornar: nome do campo e todos os erros que ele tem.

    // {
    //     "name": [ 'obrigatório', 'mínimo de caracteres' ], 
    //     "latitude": [ 'obrigatório', 'mínimo de caracteres' ], 
    //     "longitude": [ 'obrigatório', 'mínimo de caracteres' ],
    // }
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    if(error instanceof ValidationError) {
        let errors: ValidationErrors = {};
        
        // .inner é onde tem os errors

        error.inner.forEach(err => {
            errors[err.path] = err.errors;
        })

        return response.status(400).json({ message: 'Validation fails', errors })
    }

    console.error(error);

    return response.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;