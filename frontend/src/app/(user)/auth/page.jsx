"use client";

import { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { checkOtp, getOTP } from "@/services/authServices";
import CheckOTPForm from "./CheckOTPForm";
import { useRouter } from "next/navigation";

const RESEND_TIME = 90;
const AuthPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("09393673709");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [time, setTime] = useState(RESEND_TIME);

  const router = useRouter();

  const {
    data: otpResponse,
    error,
    isPending,
    mutateAsync: mutateGetOtp,
  } = useMutation({
    mutationFn: getOTP,
  });

  const { mutateAsync: mutateCheckOtp , isPending:isCheckingOtp } = useMutation({
    mutationFn: checkOtp,
  });

  const phoneNumberHandler = (e) => {
    e.preventDefault();
    setPhoneNumber(e.target.value);
  };

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateGetOtp(phoneNumber);
      setStep(2);
      setTime(RESEND_TIME);
      toast.success(data.message);
      setOtp("");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const checkOtpHandler = async (event) => {
    event.preventDefault();
    try {
      const { message, user } = await mutateCheckOtp({ phoneNumber, otp });
      setStep(2);
      toast.success(message);
      if (user.isActive) {
        router.push("/");
      } else {
        router.push("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  // timer
  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  // conditional Check or send Step
  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            phoneNumber={phoneNumber}
            onChange={phoneNumberHandler}
            onSubmit={sendOtpHandler}
            isLoading={isPending}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            otp={otp}
            setOtp={setOtp}
            onSubmit={checkOtpHandler}
            onBack={() => setStep((s) => s - 1)}
            time={time}
            onResendOtp={sendOtpHandler}
            otpResponse={otpResponse}
            isCheckingOtp={isCheckingOtp}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">{renderSteps()}</div>
    </div>
  );
};

export default AuthPage;
