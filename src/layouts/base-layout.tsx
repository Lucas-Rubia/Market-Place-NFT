import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function BaseLayout(){
    return(
        <div>
            <Header />
            <Outlet />
        </div>
    )
}