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
import Heading from '../Heading'
import Input from '../inputs/Input'
import toast from 'react-hot-toast'
import Button from '../Button'
import { FcGoogle } from 'react-icons/fc'
import { AiFillGithub } from 'react-icons/ai'

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
                toast.error('Something went wrong :(');
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    // * BODY CONTENT
    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading
                title='Welcome to Airbnb'
                subtitle='Create an account!'
            />
            {/* EMAIL FIELD */}
            <Input 
                id='email'
                label='Email'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            {/* NAME FIELD */}
            <Input 
                id='name'
                label='Name'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            {/* PASSWORD FIELD */}
            <Input 
                id='password'
                type='password'
                label='Password'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    // * FOOTER CONTENT
    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr className='text-neutral-100'/>
            <Button
                outline
                label='Continue with Google'
                icon={FcGoogle}
                onClick={() => {}}
            />
            <Button
                outline
                label='Continue with Github'
                icon={AiFillGithub}
                onClick={() => {}}
            />
            <div className="text-neutral-500 text-center mt-4 font-light">
                <div className='justify-center flex flex-row items-center gap-2'>
                    <div>Allready have an account?</div>
                    <div onClick={registerModal.onClose} className='text-neutral-800 cursor-pointer hover:underline'>Log in</div>
                </div>
            </div>
        </div>
    )

  return (
    <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title='Register'
        actionLabel='Continue'
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
    />
  )
}

export default RegisterModal