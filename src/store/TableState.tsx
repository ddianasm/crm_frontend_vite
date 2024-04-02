import { Products } from "@/contexts/ProductContext"
import { makeAutoObservable } from "mobx"
import { initialProducts } from "@/store/initalTableData"

class TableStore {
    rows: Products[] = initialProducts
    selectedRows: number[] = []

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    get row_id_list() {
        return this.rows.map(row => row.id)
    }
    get all_is_selected() {
        return this.row_id_list.every(id =>
            this.selectedRows.includes(id)
        )
    }
    // get selectFilteredRowsByName_is_selected() {
    //     // return this.selectFilteredRowsByName === this.selectedRows
    //     return this.selectFilteredRowsByName.every(f =>
    //         this.selectedRows.includes(f)
    //     )
    // }
    // get selectFilteredRowsByName() {
    //     return this.rows
    //         .filter(filter => filter.name === "laptop")
    //         .map(r => r.id)
    // }
    // toogleSelectFilteredRowsByName() {
    //     if (!this.selectFilteredRowsByName_is_selected) this.selectedRows = this.selectFilteredRowsByName
    //     else this.selectedRows = []
    // }

    set_rows(rows: Products[]) {
        this.rows = rows
    }
    toggle_all_selected_rows() {
        if (!this.all_is_selected) this.selectedRows = this.row_id_list
        else this.selectedRows = []
    }
    toggle_selected(id: number) {
        const id_is_selected = this.selectedRows.includes(id)
        if (!id_is_selected)
            this.selectedRows = [...this.selectedRows, id]
        else
            this.selectedRows = this.selectedRows.filter(selectId => selectId !== id)
    }
}

export const TableState = new TableStore()