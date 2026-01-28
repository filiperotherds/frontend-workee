import ky from "ky";
import { getCookie } from "cookies-next";

export const api = ky.create({
  prefixUrl: process.env.API_URL,
  hooks: {
    beforeRequest: [
      async (request) => {
        let token;

        if (typeof window === "undefined") {
          const { cookies: serverCookies } = await import("next/headers");

          const cookieStore = await serverCookies();

          token = cookieStore.get("token")?.value;
        } else {
          token = getCookie("token");
        }

        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
  },
  cache: "no-store"
});
