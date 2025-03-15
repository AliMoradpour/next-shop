import http from "./httpService";

export function getProduct(qs) {
  return http.get(`/product/list?${qs}`).then(({ data }) => data.data);
}
