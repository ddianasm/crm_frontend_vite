import { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { CheckBoxTableHeader } from "@/components/checkBoxes/CheckBoxTableHeader";


export const COLUMNS = [
    {
        // Header: "Select",
        Header: () => (
            <CheckBoxTableHeader />
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