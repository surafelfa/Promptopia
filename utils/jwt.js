import jwt, { JwtPayload } from "jsonwebtoken";

export function signJwtAccessToken(payload, options = { expiresIn: "1h" }) {
  const secret_key = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secret_key, options);
  return token;
}

export function verifyJwt(token) {
  try {
    const secret_key = process.env.SECRET_KEY;
    const decoded = jwt.verify(token, secret_key);
    return decoded; // as JwtPayload;
  } catch (error) {
    console.log(error);
    return null;
  }
}
