import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { images } from "@/utils/images";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { DialogHeader } from "../ui/dialog";

export function DialogConnectWallet() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Connect Wallet</Button>
      </DialogTrigger>

      <DialogContent className="max-w-[540px]">
        <DialogHeader className="flex-row justify-between items-center my-2">
          <DialogTitle>Connect Wallet</DialogTitle>
          <DialogClose>
            <X className="size-6 " />
          </DialogClose>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-4">
          <figure className="p-4 space-y-4 rounded-xl hover:brightness-150 transition bg-[#111318]">
            <img className="mx-auto" src={images.MetaMask} alt="MetaMask" />
            <figcaption className="font-semibold text-sm text-center">
              Metamask
            </figcaption>
          </figure>
          <figure className="p-4 space-y-4 rounded-xl hover:brightness-150 transition bg-[#111318]">
            <img className="mx-auto" src={images.Coin98} alt="Coin98" />
            <figcaption className="font-semibold text-sm text-center">
              Coin98
            </figcaption>
          </figure>
          <figure className="p-4 space-y-4 rounded-xl hover:brightness-150 transition bg-[#111318]">
            <img className="mx-auto" src={images.WalletConnect} alt="WalletConnect" />
            <figcaption className="font-semibold text-sm text-center">
              Wallet Connect
            </figcaption>
          </figure>
          <figure className="p-4 space-y-4 rounded-xl hover:brightness-150 transition bg-[#111318]">
            <img className="mx-auto" src={images.CoinbaseWallet} alt="CoinbaseWallet" />
            <figcaption className="font-semibold text-sm text-center">
              Coinbase Wallet
            </figcaption>
          </figure>
          <figure className="p-4 space-y-4 rounded-xl hover:brightness-150 transition bg-[#111318]">
            <img className="mx-auto" src={images.BitKeep} alt="BitKeep" />
            <figcaption className="font-semibold text-sm text-center">
              BitKeep
            </figcaption>
          </figure>
        </div>
      </DialogContent>
    </Dialog>
  );
}
