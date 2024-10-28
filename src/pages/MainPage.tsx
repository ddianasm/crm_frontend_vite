import { LeftPanel } from "@/components/leftPanel/LeftPanel"
import { TableView } from "@/components/tableView/TableView"
import { observer } from "mobx-react-lite"
import cn from "classnames"

export const MainPage = observer(() => {
    return (
        <div className="flex flex-row w-screen h-screen relative">
            <LeftPanel />
            <PageContainer>
                <TableView />
            </PageContainer >
        </div>
    )
})

type divPropsType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const PageContainer: React.FC<divPropsType> = ({ children, className, ...props }) => {
    return (
        <div
            {...props}
            className={cn("flex flex-col gap-[40px] justify-center items-center w-[95%] mx-[40px]", className)}
        >
            {children}
        </div>
    )
}
