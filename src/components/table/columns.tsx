import { CheckBoxTable } from "../checkBox/CheckBox";

export const COLUMNS = [
    {
        // Header: "Select",
        Header: () => (
            <CheckBoxTable />
        ),
        accessor: "select"
    },
    {
        Header: "ID",
        accessor: "id"
    },
    {
        Header: "Name",
        accessor: "name"
    },
    {
        Header: "Amount",
        accessor: "amount"
    },
    {
        Header: "Price",
        accessor: "price"
    },
    {
        Header: "Customer",
        accessor: "customer"
    },
    {
        Header: "Email",
        accessor: "email"
    },
    {
        Header: "Phone",
        accessor: "phone"
    },
    {
        Header: "Date",
        accessor: "date"
    },

    {
        Header: "Status",
        accessor: "status"
    }
] as const