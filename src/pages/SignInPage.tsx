import { Content } from "@/components/content/Content"
import { LeftPanel } from "@/components/leftPanel/LeftPanel"
import { TopPanel } from "@/components/topPanel/TopPanel"
import { SignInForm } from "@/components/forms/SignInForm"


export const SignInPage = () => {

    return (
        <div className='grid grid-cols-2 h-screen' style={{ gridTemplateColumns: '250px 1fr', gridTemplateRows: '60px 1fr' }}>
            <LeftPanel />
            <TopPanel />
            <Content>
                <SignInForm />
            </Content>
        </div>
    )
}