import FormSignUp from "../components/Fragments/FormSignUp";
import Authlayout from "../components/Layouts/AuthLayout";

const SignUpPage = () => {
  return (
    <Authlayout title="sign up">
      <FormSignUp />
    </Authlayout>
  );
};

export default SignUpPage;