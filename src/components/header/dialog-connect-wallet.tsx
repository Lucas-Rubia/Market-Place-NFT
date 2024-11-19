import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DialogHeader } from "../ui/dialog";
import { Button } from "../ui/button";

export function DialogConnectWallet() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Connect Wallet</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Connect Wallet</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">DialogConnectWallet</div>
        </DialogContent>
      </Dialog>
    );
}