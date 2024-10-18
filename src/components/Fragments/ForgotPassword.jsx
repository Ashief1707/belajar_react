import React from 'react'
import LabeledInput from '../Elements/LabeledInput'

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
    </from>
  )
}
