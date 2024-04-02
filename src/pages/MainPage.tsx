import { LeftPanel } from "@/components/leftPanel/LeftPanel"
import { TableView } from "@/components/tableView/TableView"
import { TableViewNS } from "@/components/TableViewNS/TableViewNS"
import { observer } from "mobx-react-lite"

export const MainPage = observer(() => {
    return (
        <div className="flex flex-row w-screen h-screen relative">
            <LeftPanel />
            <TableView />
            {/* <TableViewNS /> */}
        </div>
    )
})