const ERROR_CODES = {
  // Authentication & Authorization
  AUTH_TOKEN_MISSING: 'AUTH_TOKEN_MISSING',
  AUTH_TOKEN_INVALID: 'AUTH_TOKEN_INVALID',
  AUTH_TOKEN_EXPIRED: 'AUTH_TOKEN_EXPIRED',
  ACCESS_DENIED: 'ACCESS_DENIED',

  // Validation
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  INVALID_INPUT: 'INVALID_INPUT',

  // Resource
  RESOURCE_NOT_FOUND: 'RESOURCE_NOT_FOUND',
  RESOURCE_ALREADY_EXISTS: 'RESOURCE_ALREADY_EXISTS',

  // Server
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  DATABASE_ERROR: 'DATABASE_ERROR',

  // General
  BAD_REQUEST: 'BAD_REQUEST',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR'
};
/**
 * Common response handler - Factory pattern
 * @param {Object} res - Express response object
 * @param {Object} options - Response configuration
 * @param {boolean} options.success - Success status
 * @param {number} options.statusCode - HTTP status code
 * @param {string} options.message - Response message
 * @param {*} options.data - Response data
 * @param {Object} options.error - Error object (for error responses)
 * @param {string} options.errorCode - Error code constant
 * @param {Object} options.pagination - Pagination data
 */
const successResponse = (res, data, message = 'Success', statusCode = 200) => {
  return sendResponse(res, { success: true, statusCode, message, data });
};

const errorResponse = (res, error, statusCode = 500, errorCode = null) => {
  return sendResponse(res, { success: false, statusCode, error, errorCode });
};
module.exports = {successResponse,
errorResponse, 
ERROR_CODES
};
