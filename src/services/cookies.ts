import Cookies, { type CookieSetOptions } from "universal-cookie";

const cookies = new Cookies();

class CookieService {
  get(nameOfCookie: string) {
    return cookies.get(nameOfCookie);
  }

  set(
    nameOfCookie: string,
    valueOfCookie: unknown,
    options?: CookieSetOptions
  ) {
    return cookies.set(nameOfCookie, valueOfCookie, options);
  }

  remove(nameOfCookie: string, options?: CookieSetOptions) {
    return cookies.remove(nameOfCookie, { path: "/", ...options });
  }
}

export default new CookieService();
