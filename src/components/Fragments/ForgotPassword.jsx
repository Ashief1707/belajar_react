import React from 'react'
import LabeledInput from '../Elements/LabeledInput'
import Button from '../Elements/Button/index'

export const ForgotPassword = () => {
  return (
    <from action="">

        <div className="flex flex-col justify-center text-center">
          <span className="text-xl text-black font-bold">
              Forgot Password?
          </span>
          <span className="text-sm text-gray-03  mt-3">
              Enter your email address to get the
          </span>
          <span className="text-sm text-gray-03  ">
              password reset link.
          </span>
        </div>

        <div className="mt-5 mb-6">
        <LabeledInput
            label="Email address"
            type="email"
            placeholder="hello@example.com"
            name="email"
        />
        </div>

        <div className=" mb-6">
        <Button variant="bg-primary w-full text-white" type="submit">
            Password Reset
        </Button>
        </div>
    </from>
  )
}
