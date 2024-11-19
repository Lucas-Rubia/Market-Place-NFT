import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function BaseLayout() {
    return (
      <div>
        <Header />
        <div className="px-20 pt-16 pb-40 [&>main]:max-w-[1920px] [&>main]:mx-auto bg-[#080A0C] text-white">
          <Outlet />
        </div>
      </div>
    );
}