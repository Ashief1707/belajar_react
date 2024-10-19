import React from 'react'
import Authlayout from "../components/Layouts/AuthLayout";
import { ForgotPassword } from '../components/Fragments/ForgotPassword';

export const ForgotPassPages = () => {
  return (
    <Authlayout type="forgotpassword">
      <ForgotPassword/>
    </Authlayout>
  )
}
