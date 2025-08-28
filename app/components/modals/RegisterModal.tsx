'use client'
import React, { useState } from 'react'

import axios from 'axios'
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form'

import useRegisterModal from '../hooks/useRegisterModal'
import Modal from './Modal'

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    // * Submit function
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        // axios endpoint
        axios.post('/api/register', data)
            .then(() => {
                registerModal.onClose();
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

  return (
    <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title='Register'
        actionLabel='Continue'
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
    />
  )
}

export default RegisterModal


// **************** //
// * > 1:12:58 < * //
// **************** //