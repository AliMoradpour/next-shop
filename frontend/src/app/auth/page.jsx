"use client";

import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import http from "@/services/httpService";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { getOTP } from "@/services/authServices";

const AuthPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const { data, error, isPending, mutateAsync } = useMutation({
    mutationFn: getOTP,
  });
  const phoneNumberHandler = (e) => {
    e.preventDefault();
    setPhoneNumber(e.target.value);
  };

  const sendOTPHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync(phoneNumber);
      console.log(data.data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">
        <SendOTPForm phoneNumber={phoneNumber} onChange={phoneNumberHandler} onSubmit={sendOTPHandler} />
      </div>
    </div>
  );
};

export default AuthPage;
