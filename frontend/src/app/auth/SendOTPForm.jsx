import TextField from "@/common/TextField";

const SendOTPForm = ({phoneNumber , onChange}) => {
  return (
    <div>
      <form>
        <TextField label="شماره موبایل را وارد کنید" name="phoneNumber" onChange={onchange} value={phoneNumber}/>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SendOTPForm;
