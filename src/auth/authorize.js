const authorize = (req, res, next) => {
  const apikey = process.env.API_KEY
  const clientSecret = process.env.CLIENT_SECRET

  const apikeyFromHeader = req.headers.api_key
  const clientSecretFromHeader = req.headers.client_secret

  if (!apikeyFromHeader && !clientSecretFromHeader) {
    return res
      .status(401)
      .json({ message: 'You must provide an api_key and client_secret' })
  }

  if (!apikeyFromHeader) {
    return res.status(401).json({ message: 'You must provide an api_key' })
  }

  if (!clientSecretFromHeader) {
    return res.status(401).json({ message: 'You must provide a client_secret' })
  }

  if (apikeyFromHeader !== apikey) {
    return res.status(401).json({ message: 'Invalid api_key' })
  }

  if (clientSecretFromHeader !== clientSecret) {
    return res.status(401).json({ message: 'Invalid client_secret' })
  }
  next()
}

module.exports = authorize
