import Button from "../Elements/Button";
import Checkbox from "../Elements/CheckBox";
import LabeledInput from "../Elements/LabeledInput";

const FormSignIn = () => {
  return (
    <form action="">
      <LabeledInput
        label="Email address"
        type="email"
        placeholder="hello@example.com"
        name="email"
      />
      <LabeledInput
        label="Password"
        type="password"
        placeholder="*************"
        name="password"
      />
      <Checkbox label="Keep me signed in" name="status" />
      <Button variant="bg-primary w-full text-white">Login</Button>
    </form>
  );
};

export default FormSignIn;