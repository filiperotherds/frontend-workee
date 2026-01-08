import ky from "ky";
import { getCookie } from "cookies-next";

export const api = ky.create({
  prefixUrl: "https://backend-jobble-production.up.railway.app",
  // prefixUrl: "http://localhost:3333",
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
});
