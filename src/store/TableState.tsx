import { makeAutoObservable } from 'mobx'

export type TProduct = {
    id: number,
    name: string,
    amount: number,
    price: number,
    customer: string,
    email: string,
    phone: string,
    date: string,
    status: string
}

class TableStore {
    columns: string[] = []
    rows: TProduct[] = []
    selectedRows: number[] = []

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    get rowIdList() {
        return this.rows.map(row => row.id)
    }

    get allIsSelected() {
        if (this.rows.length === 0) return false;
        return this.rowIdList.every(id =>
            this.selectedRows.includes(id)
        )
    }

    get hasSelectedRows(): boolean {
        return this.selectedRows.length > 0;
    }

    setRows(rows: TProduct[]) {
        this.rows = rows;
    }

    setColumns(columns: string[]) {
        this.columns = columns
    }

    clearData() {
        this.rows = []
        this.selectedRows = []
    }

    clearSelectedRows() {
        this.selectedRows = []
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