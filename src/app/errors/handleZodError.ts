import { ZodError } from 'zod';
import { TCustomSimplifiedError } from '../interface/global.type';

const handleZodError = (error: ZodError): TCustomSimplifiedError => {
  let zodMessage = '';
  const errorDetails = error.issues.map(issue => {
    zodMessage += issue.message + ' ';
    return {
      field: issue.path[issue.path.length - 1],
      message: issue.message,
    };
  });

  const statusCode = 400;
  return {
    statusCode,
    message: zodMessage || 'Validation error occur!',
    errorDetails,
  };
};

export default handleZodError;
