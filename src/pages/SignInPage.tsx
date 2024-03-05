import { Content } from "@/components/mainPageComponents/content/Content"
import { LeftPanel } from "@/components/left_panel/LeftPanel"
import { TopPanel } from "@/components/top_panel/TopPanel"
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