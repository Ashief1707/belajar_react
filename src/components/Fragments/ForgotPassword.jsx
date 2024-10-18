import React from 'react'
import LabeledInput from '../Elements/LabeledInput'
import Button from '../Elements/Button/index'

export const ForgotPassword = () => {
  return (
    <from action="">
        <div className="mb-6">
        <LabeledInput
            label="Email address"
            type="email"
            placeholder="hello@example.com"
            name="email"
        />
        </div>
        <Button variant="bg-primary w-full text-white" type="submit">
            Password Reset
        </Button>
    </from>
  )
}
