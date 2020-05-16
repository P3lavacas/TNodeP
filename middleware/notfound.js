module.exports = (req, res, next)=> {
  return res.status(404).jason({code: 404, message: "URL no encontrada"});
}
