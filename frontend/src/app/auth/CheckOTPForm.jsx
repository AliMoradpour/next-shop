import OTPInput from "react-otp-input";

const CheckOTPForm = ({ onSubmit, otp, setOtp, onBack, time, onResendOtp }) => {
  return (
    <div>
      <button onClick={onBack}>برگشت</button>
      <div>{time > 0 ? <p>{time} تا ارسال مجدد کد</p> : <button onClick={onResendOtp}>ارسال مجدد کد؟</button>}</div>
      <form className="space-y-10" onSubmit={onSubmit}>
        <p>کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: "0.5rem",
          }}
          containerStyle="flex gap-x-2 justify-center"
        />
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      </form>
    </div>
  );
};

export default CheckOTPForm;
