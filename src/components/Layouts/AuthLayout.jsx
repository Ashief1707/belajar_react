import Button from "../Elements/Button";
import Logo from "../Elements/Logo";

const Authlayout = (props) => {
  const { children, title } = props;

  return (
    <div className="w-full max-w-xs">
      <Logo />
      {children}
      <div className="py-7 flex justify-center text-xs text-gray-03">
        <span class="bg-white px-5"> or {title} with</span>
      </div>
      <Button variant="bg-gray-05 w-full text-gray-01">
        <span className="text-dec">Continue with Google</span>
      </Button>
    </div>
  );
};

export default Authlayout;