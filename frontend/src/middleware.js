export function middleware(req) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/admin")) {
    console.log("this is admin req");
  }
  if (pathname.startsWith("/profile")) {
    console.log("this is profile req");
  }
}

export const config = {
  matcher: ["/admin", "/profile"],
};
