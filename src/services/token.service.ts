import jwt from "jsonwebtoken";



export default class TokenService {
    static setToken(
      email: string,
      password: string,
      userName: string,
      SECRET: jwt.Secret,
      time: jwt.SignOptions | undefined
    ) {
      return jwt.sign(
        { email: email, password: password, userName: userName },
        SECRET,
        time
      );
    }
  
    static veryfyToken(token: string, SECRET: string) {
      let veryfy = jwt.verify(token, SECRET);
      return veryfy;
    }
  }