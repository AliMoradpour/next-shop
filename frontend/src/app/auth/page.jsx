"use client";

import { useState } from "react";
import SendOTPForm from "./SendOTPForm";

const AuthPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const phoneNumberHandler = (e) => {
    e.preventDefault();
    setPhoneNumber(e.target.value);
  };
  
  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">
        <SendOTPForm phoneNumber={phoneNumber} onChange={phoneNumberHandler} />
      </div>
    </div>
  );
};

export default AuthPage;
