import Button from "../Elements/Button";
import LabeledInput from "../Elements/LabeledInput";

const FormSignUp = () => {
  return (
    <div>
      <div className="text-center pb-5 font-bold text-xl">
        Create an account
      </div>
      <form action="">
        <LabeledInput
          label="Name"
          type="text"
          placeholder="John Doe"
          name="name"
        />
        <LabeledInput
          label="Email Address"
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
        <Button variant="bg-primary w-full text-white">Sign Up</Button>
      </form>
    </div>
  );
};

export default FormSignUp;