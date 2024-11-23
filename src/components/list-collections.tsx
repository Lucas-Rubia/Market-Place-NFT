import { COLLECTIONS } from "@/data";
import { currencyFormat } from "@/utils/currency-format";
import { Check } from "lucide-react";

export function ListCollections() {
  const groupedCollections = [
    COLLECTIONS.slice(0, 3),
    COLLECTIONS.slice(3, 6),
    COLLECTIONS.slice(6, 9),
    COLLECTIONS.slice(9, 12),
  ];

  return (
    <div className="flex items-center justify-between gap-10 flex-wrap"> 
      {groupedCollections.map((group, index) => (
        <div key={index} className="space-y-6">
          {group.map((collection) => (
            <div
              key={collection.topNumber}
              className="flex items-center gap-4 hover:bg-[#111318] p-4 rounded-xl min-w-[350px]"
            >
              <span className="font-semibold text-lg">
                {collection.topNumber}
              </span>

              <div className="relative">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-16]"
                />
                {collection.purchased && (
                  <Check className="absolute bottom-0.5 right-1 bg-[#00DBB6] rounded-full size-5 p-1 stroke-[4px]" />
                )}
              </div>

              <div className="space-y-1">
                <h3 className="font-semibold text-lg">{collection.name}</h3>
                <p className="text-sm text-[#637592]">
                  {currencyFormat(collection.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
