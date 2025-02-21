import http from "./httpService";

export function getOTP(phoneNumber) {
  return http.post("/user/get-otp", { phoneNumber }).then(({data}) => data.data);
}
