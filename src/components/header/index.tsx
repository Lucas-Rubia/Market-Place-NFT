import { images } from "@/utils/images";
import { DialogConnectWallet } from "./dialog-connect-wallet";
import { DialogBnbChain } from "./dialog-bnb-chain";
import { Actions } from "./actions";
import { MenuLinks } from "./menu-links";

export function Header() {
  return (
    <header className="bg-[#111318] px-20 h-[88px] flex items-center">
      <div className="max-w-[1920px] mx-auto text-white flex justify-between w-full items-center">
        <div className="flex items-center gap-10">
          <img src={images.IconLogo} alt="NFT-Bloc" />
          <MenuLinks/>
        </div>

        <div className="space-x-4 flex items-center">
          <Actions />
          <DialogBnbChain />
          <DialogConnectWallet />
        </div>
      </div>
    </header>
  );
}