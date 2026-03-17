import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.headers.token) {
      token = req.headers.token;
    }

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized: Token Missing",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = decoded;
    req.user = { id: decoded.id };
    next();
  } catch (error) {
    console.log(error);
  }
};
