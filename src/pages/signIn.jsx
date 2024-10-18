import FormSignIn from "../components/Fragments/FormSignIn";
import Authlayout from "../components/Layouts/AuthLayout";

const SignInPage = () => {
  return (
    <Authlayout type="signin">
      <FormSignIn />
    </Authlayout>
  );
};

export default SignInPage;