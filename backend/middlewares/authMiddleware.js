import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized: Token Missing",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded", decoded);
    // req.user = decoded;
    req.user = { id: decoded.id };
    next();
  } catch (error) {
    console.log(error);
  }
};
