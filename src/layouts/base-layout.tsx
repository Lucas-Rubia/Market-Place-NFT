import { CtaGetUpdates } from "@/components/cta-get-updates";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function BaseLayout() {
    return (
      <div>
        <Header />
        <div className="px-20 pt-16 pb-40 [&>main]:max-w-[1920px] [&>main]:mx-auto text-white">
          <Outlet />
        </div>
        <CtaGetUpdates />
        <Footer />
      </div>
    );
}