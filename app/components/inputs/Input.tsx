'use client'
import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface props {
    id: string
    label: string
    type?: string
    disabled?: boolean
    formatPrice?: boolean
    required?: boolean
    register: UseFormRegister<FieldValues>
}

const Input = () => {
  return (
    <div>
      Input
    </div>
  )
}

export default Input

// *** 1:18:09 *** //
