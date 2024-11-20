import { images } from "@/utils/images";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Check, LayoutDashboard } from "lucide-react";
import { Separator } from "./ui/separator";
import { NFTCard } from "@/interfaces";


interface NFTCardsProps {
    cards: NFTCard[];
    type: "auction" | "discover"
}

export function NFTCards({cards, type}: NFTCardsProps) {
    return (
      <div className="flex items-center gap-10 justify-between flex-wrap">
        {cards.map((card, index) => (
          <Card key={index} className="w-[350px]">
            <CardContent className="p-0">
              <img src={card.image} alt="NFT" className="size-[350px]" />

              <div className="p-6 pb-4 space-y-2">
                <div className="flex items-center justify-between ">
                  <p className="flex items-center gap-2 text-[#637592] text-sm font-light">
                    {card.collectionName}
                    <Check className="bg-[#00DBB6] rounded-full size-[16px] p-1 stroke-[4px] text-[#111318]" />
                  </p>

                  <img src={images.IconCoin} alt="Coin" />
                </div>

                <div className="flex items-center justify-between">
                  <CardTitle className="font-semibold text-lg">
                    {card.name}
                  </CardTitle>
                 {card.items && (
                  <div className="flex items-center justify-between gap-1 text-[#637592] text-sm">
                    <span>{card.items}</span>
                    <LayoutDashboard className="size-4" />
                  </div>
                 )}
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex-col items-start ">
              <Separator />
              <div className="mt-4 flex items-center gap-11">
                <div>
                  <p className="text-[#637592] text-xs mb-1">{type === "auction" ? "Current bid" : "Price"}</p>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-semibold">{card.price} BUSD</h4>
                    {type === "auction" && (
                        <img src={images.IconHammer} alt="Hammer" />
                    )}
                  </div>
                </div>

                {card.timeLeft && (
                   
                <div>
                  <h4 className="text-[#637592] text-xs mb-1 font-semibold">
                    Ends in
                  </h4>
                  <p>{card.timeLeft}</p>
                </div>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    );

}