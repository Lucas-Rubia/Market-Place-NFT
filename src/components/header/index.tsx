import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { images } from "@/utils/images";
import { BadgePercent, Menu, Settings, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Actions } from "./actions";
import { DialogBnbChain } from "./dialog-bnb-chain";
import { DialogConnectWallet } from "./dialog-connect-wallet";
import { MenuLinks } from "./menu-links";

export function Header() {
  return (
    <header className="bg-[#111318] px-20 h-[88px] flex items-center">
      <div className="max-w-[1920px] mx-auto text-white flex justify-between w-full items-center">
        <div className="flex items-center gap-10">
          <img src={images.IconLogo} alt="NFT-Bloc" />
          <MenuLinks />
        </div>

        <div className="space-x-4 flex items-center">
          <Actions />
          <DialogBnbChain />
          <DialogConnectWallet />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <img
                className="size-11"
                src={images.AvatarProfile}
                alt="AvatarProfile"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[285px]">
              <div className="px-6 py-2 space-y-4">
                <div className="flex items-center gap-4">
                  <img src={images.AvatarProfile} alt="AvatarProfile" />
                  <div>
                    <p className="text-sm mb-1">LucasRubia</p>
                    <Link
                      to="/"
                      className="text-[#3d6eff] font-semibold text-sm "
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
                <div className="p-4 pb-3 bg-[#242932] rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <img src={images.IconBUSD} alt="BUSD" />
                      <p>BUSD</p>
                    </div>
                    <p>10,2 BUSD</p>
                  </div>
                  <Button variant="link">Add funds with cards</Button>
                </div>
              </div>
              <DropdownMenuItem>
                <Wallet className="!size-6" />
                My NFTs
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Menu className="!size-6" />
                My Collections
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BadgePercent className="!size-6" />
                My Coupons
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="!size-6" />
                Settings
              </DropdownMenuItem>

              <Button variant="link" className="flex mx-auto my-4 text-base">
                Logout
              </Button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
