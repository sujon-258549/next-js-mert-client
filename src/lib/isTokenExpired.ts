import { jwtDecode } from "jwt-decode";

export const isTokenExpired = async (token: string): Promise<boolean> => {
  if (!token) return true;
  try {
    const decode: { exp: number } = jwtDecode(token);
    return decode.exp * 1000 < Date.now();
  } catch (err) {
    console.error(err);
    return true;
  }
};
