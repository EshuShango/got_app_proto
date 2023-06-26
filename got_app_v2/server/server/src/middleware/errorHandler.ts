// AppError.ts


export class AppError extends Error {
  public readonly name: string;
  public readonly httpCode: number;
  public readonly isOperational: boolean;

  constructor(name: string, httpCode: number, description: string, isOperational: boolean) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name; // Custom name
    this.httpCode = httpCode; // HTTP status code
    this.isOperational = isOperational; // If error is operational or unknown 

    Error.captureStackTrace(this);
  }
}

