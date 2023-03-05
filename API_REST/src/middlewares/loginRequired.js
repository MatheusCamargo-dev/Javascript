import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [identify, token] = authorization.split(' ');

  try {
    if (identify !== 'Bearer') {
      throw new Error('Token invalid.');
    }
    const userData = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = userData;
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token invalid.'],
    });
  }
};
