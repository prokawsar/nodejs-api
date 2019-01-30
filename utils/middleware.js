module.exports = {
  successHandler: (result, req, res, next) =>{
    res.status(result.status || 200);
    res.json({
      message: "SUCCESS",
      count: result.length,
      internal_message: result.message,
      records: result
    })
  },
  noRouteHandler: (req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
  },

  errorHandler: (error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      message: "ERROR",
      internal_message: error.message
    })
  }

}