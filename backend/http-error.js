class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); //Adds a 'message' property (luckych8080)
    this.code = errorCode;
  }
}

module.exports = HttpError;
