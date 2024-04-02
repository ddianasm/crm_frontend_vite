import { TableState } from "@/store/TableState";
import cn from "classnames"
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { IoCheckmarkSharp } from "react-icons/io5";

const columns = Object.keys(TableState.rows[0])

export const TableViewNS = observer(() => {
    console.log(toJS(TableState.selectedRows))
    // console.log(toJS(TableState.selectFilteredRowsByName), toJS(TableState.selectedRows))
    // console.log(TableState.selectFilteredRowsByName_is_selected)

    return (
        <PageContainer>
            {/* <div>
                Вибрати елементи з іменем "laptop"
                <CheckBox
                    rowId={null}
                    condition={TableState.selectFilteredRowsByName_is_selected}
                    handler={() => TableState.toogleSelectFilteredRowsByName()}
                />
            </div> */}
            <div className={cn("table h-1 min-w-full")}>
                <HeaderRow>
                    <HeaderRowCheckBox />
                    {columns.map(column =>
                        <Column key={column}>
                            {column}
                        </Column>
                    )}
                </HeaderRow>
                {TableState.rows.map(row =>
                    <Row key={row.id}>
                        <RowCheckBox rowId={row.id} />
                        {columns.map(column =>
                            <Column key={column}>
                                {(row as any)[column]}
                            </Column>
                        )}
                    </Row>
                )}
            </div>
        </PageContainer>
    )
})

type divPropsType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const PageContainer: React.FC<divPropsType> = ({ children, className, ...props }) => {
    return (
        <div className={cn("flex flex-col gap-[40px] justify-center items-center w-full mx-[40px]", className)} {...props}>
            {children}
        </div>
    )
}


const HeaderRowCheckBox: React.FC<any> = observer((props) => {
    return (
        <CheckBox
            {...props}
            rowId={null}
            condition={TableState.all_is_selected}
            handler={() => TableState.toggle_all_selected_rows()}
        />
    )
})

const RowCheckBox: React.FC<any> = observer(({ rowId, ...props }) => {
    return (
        <CheckBox
            {...props}
            rowId={rowId}
            condition={TableState.selectedRows.includes(rowId)}
            handler={() => TableState.toggle_selected(rowId)}
        />
    )
})

const CheckBox: React.FC<any> = observer(({ className, rowId, condition, handler, ...props }) => {
    return (
        <label
            {...props}
            htmlFor={rowId}
            className={cn(
                "inline-flex justify-center items-center rounded-sm_radius w-[20px] h-[20px] cursor-pointer border border-gray",
                className
            )}
        >
            <input
                type="checkbox"
                id={rowId}
                className='hidden'
                onChange={handler}
            />
            {condition &&
                <IoCheckmarkSharp className='text-dark' />
            }
        </label>
    )
})

const HeaderRow: React.FC<divPropsType> = ({ children, className, ...props }) => {
    return (
        <div className={cn("table-row", className)} {...props}>
            {children}
        </div>
    )
}

const Row: React.FC<divPropsType> = ({ children, className, ...props }) => {
    return (
        <div className={cn("table-row", className)} {...props}>
            {children}
        </div>
    )
}

const Column: React.FC<divPropsType> = ({ children, className, ...props }) => {
    return (
        <div className={cn("table-cell", className)} {...props}>
            {children}
        </div>
    )
} 