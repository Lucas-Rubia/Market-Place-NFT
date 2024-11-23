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

export function DialogBnbChain() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <img className="size-5" src={images.IconCoin} alt="BNB Chain" />
          BNB Chain
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-[540px]">
        <DialogHeader className="flex-row justify-between items-center my-2">
          <DialogTitle>Networks</DialogTitle>
          <DialogClose>
            <X className="size-6 " />
          </DialogClose>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-4">
          <figure className="p-4 space-y-4 rounded-xl hover:brightness-150 transition bg-[#111318]">
            <img className="mx-auto" src={images.Ethereum} alt="Ethereum" />
            <figcaption className="font-semibold text-sm text-center">
              Ethereum
            </figcaption>
          </figure>
          <figure className="p-4 space-y-4 rounded-xl hover:brightness-150 transition bg-[#111318]">
            <img className="mx-auto" src={images.BNBChain} alt="BNB-Chain" />
            <figcaption className="font-semibold text-sm text-center">
              BNB Chain
            </figcaption>
          </figure>
          <figure className="p-4 space-y-4 rounded-xl hover:brightness-150 transition bg-[#111318]">
            <img className="mx-auto" src={images.Polygon} alt="Polygon" />
            <figcaption className="font-semibold text-sm text-center">
              Polygon
            </figcaption>
          </figure>
          <figure className="p-4 space-y-4 rounded-xl hover:brightness-150 transition bg-[#111318]">
            <img className="mx-auto" src={images.Cronos} alt="Cronos" />
            <figcaption className="font-semibold text-sm text-center">
              Cronos
            </figcaption>
          </figure>
          <figure className="p-4 space-y-4 rounded-xl hover:brightness-150 transition bg-[#111318]">
            <img className="mx-auto" src={images.Solana} alt="Solana" />
            <figcaption className="font-semibold text-sm text-center">
              Solana
            </figcaption>
          </figure>
          <h3 className="flex items-center text-center font-semibold justify-center p-4 space-y-4 rounded-xl hover:brightness-150 transition bg-[#111318]">
            Coming soon
          </h3>
        </div>
      </DialogContent>
    </Dialog>
  );
}
