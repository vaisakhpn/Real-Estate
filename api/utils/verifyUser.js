import { errorHandler } from "./error.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(errorHandler(401, "Unautherized"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        res.clearCookie('access_token');
        return next(errorHandler(401, "Session Expired"));
      }
      return next(errorHandler(403, "Forbidden"));
    }
    req.user = user;
    next();
  });
};
