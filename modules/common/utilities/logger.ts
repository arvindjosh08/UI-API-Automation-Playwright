import winston from 'winston';
import fs from 'fs';
import path from 'path';

// -----------------------------------------
// Ensure test-results/logs folder exists
// -----------------------------------------
const logsDir = path.resolve('test-results', 'logs');

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// -----------------------------------------
// LOGGER INITIALIZATION
// -----------------------------------------
export const logger = winston.createLogger({
  level: 'info',

  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(
      ({ timestamp, level, message }) =>
        `${timestamp} [${level.toUpperCase()}]: ${message}`
    )
  ),

  transports: [
    new winston.transports.File({
      filename: path.join(logsDir, 'error.log'),
      level: 'error'
    }),
    new winston.transports.File({
      filename: path.join(logsDir, 'combined.log')
    })
  ]
});

// -----------------------------------------
// Add console logging for local development
// -----------------------------------------
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}