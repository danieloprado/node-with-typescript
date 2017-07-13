export function error(err, req, res, next) {
  if (err.validationError) {
    return res.status(400).json(err.details);
  }

  console.error(err);
  res.status(500).send(err.stack);
}
