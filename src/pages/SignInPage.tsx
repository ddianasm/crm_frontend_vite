import { ErrorMesssage } from "@/components/errorMessage/ErrorMessage"
import { SignInForm } from "@/components/forms/signInForm/SignInForm"

export const SignInPage = () => {
    return (
        <div className="flex flex-row h-screen w-screen justify-center items-center">
            <ErrorMesssage />
            <SignInForm />
        </div>
    )
}