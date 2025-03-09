import http from "./httpService";

export function getProduct() {
  return http.get("/product/list").then(({ data }) => data.data);
}
