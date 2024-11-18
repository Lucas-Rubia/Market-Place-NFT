import { BaseLayout } from "@/layouts/base-layout";
import { Home } from "@/pages/home";
import { NotFound } from "@/pages/notfound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<BaseLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
                
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}