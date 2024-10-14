import FormSignUp from "../components/Fragments/FormSignUp";
import Authlayout from "../components/Layouts/AuthLayout";

const SignUpPage = () => {
  return (
    <Authlayout type="signup">
      <FormSignUp />
    </Authlayout>
  );
};

export default SignUpPage;