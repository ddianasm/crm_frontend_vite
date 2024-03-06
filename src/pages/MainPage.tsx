import { Content } from "@/components/mainPageComponents/content/Content"
import { TopPanel } from "@/components/top_panel/TopPanel"
import { LeftPanelMainPage } from "@/components/leftPanelMainPage/LeftPanelMainPage"

export const MainPage = () => {
    return (
        <div className='grid grid-cols-2 h-screen' style={{ gridTemplateColumns: '50px 1fr', gridTemplateRows: '60px 1fr' }}>
            <LeftPanelMainPage />
            <TopPanel />
            <Content />
        </div>
    )
}