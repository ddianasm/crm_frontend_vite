import { ErrorMesssage } from "@/components/errorMessage/ErrorMessage"
import { SignUpForm } from "@/components/forms/signUpForm/SignUpForm"

export const SignUpPage = () => {
    return (
        <div className="flex flex-row h-screen w-screen justify-center items-center">
            <ErrorMesssage />
            <SignUpForm />
        </div>
    )
}