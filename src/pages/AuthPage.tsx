import { SignInForm } from "@/components/forms/SignInForm"
import { SignUpForm } from "@/components/forms/SignUpForm"
import { useState } from "react"

type currentFormType = 'signUp' | 'signIn'

export const AuthPage = () => {
    const [currentForm, setCurrentForm] = useState<currentFormType>('signIn');
    return (
        <div className="flex flex-row h-screen w-screen justify-center items-center">
            {currentForm === 'signIn' ? (
                <SignInForm setCurrentForm={setCurrentForm} />
            ) : (
                <SignUpForm setCurrentForm={setCurrentForm} />
            )}
        </div >
    )
}