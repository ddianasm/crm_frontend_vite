import { LeftPanel } from "@/components/leftPanel/LeftPanel"
import { TableView } from "@/components/tableView/TableView"

export const MainPage = () => {
    return (
        <div className="flex flex-row w-screen h-screen relative">
            <LeftPanel />
            <TableView />
        </div>
    )
}