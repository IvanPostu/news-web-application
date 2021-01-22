export default (req, _res, next) => {
  console.log(req.url)
  next()
}
