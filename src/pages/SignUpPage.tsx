import { Content } from "@/components/content/Content"
import { LeftPanel } from "@/components/left_panel/LeftPanel"
import { TopPanel } from "@/components/top_panel/TopPanel"
import { SignUpForm } from "@/components/forms/SignUpForm"
import axios from "axios"
import { useEffect } from "react"

const test_thunk = async () => {
    axios({
        url: "http://localhost:3000/test",
        withCredentials: true
    })
}

export const SignUpPage = () => {
    useEffect(() => {
        test_thunk().finally(console.log)
    }, [])

    return (
        <div className='grid grid-cols-2 h-screen' style={{ gridTemplateColumns: '250px 1fr', gridTemplateRows: '60px 1fr' }}>
            <LeftPanel />
            <TopPanel />
            <Content>
                <SignUpForm />
            </Content>
        </div>
    )
}