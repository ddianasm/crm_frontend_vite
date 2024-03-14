import { Content } from "@/components/content/Content"
import { TopPanel } from "@/components/topPanel/TopPanel"
import { LeftPanelMainPage } from "@/components/leftPanelMainPage/LeftPanelMainPage"
import { TableView } from "@/components/tableView/TableView"

export const MainPage = () => {
    return (
        <div className='grid grid-cols-2 h-screen' style={{ gridTemplateColumns: '50px 1fr', gridTemplateRows: '60px 1fr' }}>
            <LeftPanelMainPage />
            <TopPanel />
            <Content>
                <TableView />
            </Content>
        </div>
    )
}