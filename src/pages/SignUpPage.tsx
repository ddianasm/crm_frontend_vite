import { Content } from "@/components/content/Content"
import { LeftPanel } from "@/components/leftPanel/LeftPanel"
import { TopPanel } from "@/components/topPanel/TopPanel"
import { SignUpForm } from "@/components/forms/SignUpForm"


export const SignUpPage = () => {

    return (
        <div className='grid grid-cols-2 h-screen' style={{ gridTemplateColumns: '250px 1fr', gridTemplateRows: '60px 1fr' }}>
            <LeftPanel />
            <TopPanel />
            <Content>
                <SignUpForm />
            </Content>
        </div>
    )
}