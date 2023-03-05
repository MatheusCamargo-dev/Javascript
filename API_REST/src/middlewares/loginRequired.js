import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
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

    const user = await User.findOne({
      where: { id, email },
    });
    if (!user) {
      return res.status(401).json({
        errors: ['user invalid.'],
      });
    }
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token invalid.'],
    });
  }
};
