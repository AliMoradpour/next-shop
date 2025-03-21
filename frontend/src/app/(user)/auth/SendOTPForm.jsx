import Loading from "@/common/Loading";
import TextField from "@/common/TextField";

const SendOTPForm = ({ phoneNumber, onChange, onSubmit, isLoading }) => {
  return (
    <div>
      <form className="space-y-10" onSubmit={onSubmit}>
        <TextField label="شماره موبایل را وارد کنید" name="phoneNumber" onChange={onChange} value={phoneNumber} />
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SendOTPForm;
