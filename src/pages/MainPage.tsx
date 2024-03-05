import { Content } from "@/components/content/Content"
import { LeftPanel } from "@/components/left_panel/LeftPanel"
import { TopPanel } from "@/components/top_panel/TopPanel"
import { SignInForm } from "@/components/forms/SignInForm"
import { BasicTable } from "@/contentComponents/BasicTable"


export const MainPage = () => {
    return (
        <div className='grid grid-cols-2 h-screen' style={{ gridTemplateColumns: '250px 1fr', gridTemplateRows: '60px 1fr' }}>
            <LeftPanel />
            <TopPanel />
            <Content>
                <BasicTable />
            </Content>
        </div>
    )
}