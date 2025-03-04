export default async function middlewareAuth(req) {
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

  return user;
}
