import { ProductType } from "@/contexts/ProductContext"
import { makeAutoObservable } from "mobx"
import { initialProducts } from "@/store/initalTableData"

class TableStore {
    rows: ProductType[] = initialProducts
    selectedRows: number[] = []

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    get rowIdList() {
        return this.rows.map(row => row.id)
    }
    get allIsSelected() {
        return this.rowIdList.every(id =>
            this.selectedRows.includes(id)
        )
    }

    setRows(rows: ProductType[]) {
        this.rows = rows
    }
    toggleAllSelectedRows() {
        if (!this.allIsSelected) this.selectedRows = this.rowIdList
        else this.selectedRows = []
    }
    toggleSelectedRows(id: number) {
        const idIsSelected = this.selectedRows.includes(id)
        if (!idIsSelected)
            this.selectedRows = [...this.selectedRows, id]
        else
            this.selectedRows = this.selectedRows.filter(selectId => selectId !== id)
    }
}

export const TableState = new TableStore()