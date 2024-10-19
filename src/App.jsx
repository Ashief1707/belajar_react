import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signIn"
import SignUpPage from "./pages/SignUp";
import ErrorRoute from "./pages/errorRoute";
import { ForgotPassPages } from "./pages/ForgotPassPages";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/login",
      element: <SignInPage/>,
      
    },
    {
      path: "/register",
      element: <SignUpPage/>
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassPages/>
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
