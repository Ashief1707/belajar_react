import React from 'react'
import Logo from '../Elements/Logo'
import { ForgotPassword } from '../Fragments/ForgotPassword'

export const ForgotPassLayout = () => {
  return (
    <div className="flex justify-center min-h-screen items-center bg-special-mainBg">
      {/* container start */}
      <div className="w-full max-w-sm">

        {/* logo start */}
        <Logo/>
        {/* logo end */}

        {/* teks start */}
        <div className="flex flex-col justify-center mt-7 text-center">
          <span className="text-xl text-black font-bold">
              Forgot Password?
          </span>
          <span className="text-sm text-gray-03  mt-2">
              Enter your email address to get the
          </span>
          <span className="text-sm text-gray-03  ">
              password reset link.
          </span>
        </div>
        {/* teks end */}

        {/* form strat */}
        <div className="mt-6">
          <ForgotPassword/>
        </div>
        {/* form end */}

      </div>
      {/* container end */}
    </div>
  )
}
