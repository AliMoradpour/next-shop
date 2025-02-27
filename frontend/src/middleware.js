import { NextResponse } from "next/server";

export async function middleware(req) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/admin")) {
    let strCookie = "";
    req.cookies.getAll().forEach((item) => {
      strCookie += `${item?.name}=${item?.valu}; `;
    });

    const { data } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: strCookie,
      },
    }).then((res) => res.json());
  }

  if (pathname.startsWith("/profile")) {
    let strCookie = "";
    req.cookies.getAll().forEach((item) => {
      strCookie += `${item?.name}=${item?.valu}; `;
    });

    const { data } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: strCookie,
      },
    }).then((res) => res.json());
    const { user } = data || {};
    if(!user){
      NextResponse.redirect(new URL("/auth", url))
    }
  }
}

export const config = {
  matcher: ["/admin", "/profile"],
};
