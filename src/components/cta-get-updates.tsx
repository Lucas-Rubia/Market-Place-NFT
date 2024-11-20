import { ArrowRight } from "lucide-react";
import { Input } from "./ui/input";

export function CtaGetUpdates() {
    return (
      <section className="bg-[#111318] py-[180px] text-white flex justify-center flex-col items-center">
        <div className="max-w-[570px] space-y-10 ">
          <h2 className="font-bold text-[34px]">
            Get the latest Blocvault updates
          </h2>

          <div className="relative">
            <Input placeholder="Your E-mail" className="h-16 pl-4 pr-12"/>
            <ArrowRight className="size-6 absolute right-4 top-0 bottom-0 h-full" />
          </div>
        </div>
      </section>
    );
}