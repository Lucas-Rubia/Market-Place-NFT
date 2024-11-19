import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DialogHeader } from "../ui/dialog";
import { Button } from "../ui/button";
import { images } from "@/utils/images";

export function DialogBnbChain() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary">
            <img className="size-5" src={images.IconCoin} alt="BNB Chain" />
            BNB Chain
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Networks</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">BNB Chain</div>
        </DialogContent>
      </Dialog>
    );
}