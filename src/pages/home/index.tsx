import { ListCollections } from "@/components/list-collections";
import { ProductList } from "./product-list";
import { HeaderTitle } from "@/components/header-title";
import { NFTCards } from "@/components/nft-cards";
import { CARD_AUCTIONS, CARD_DISCOVER } from "@/data";
import { Button } from "@/components/ui/button";

export function Home() {
    return (
      <main>
        <ProductList />
        <section className="[&>#header]:mb-10 mt-16 mb-[164px]">
          <HeaderTitle title="Hot Collections" link="/" />
          <ListCollections />
        </section>

        <section className="[&>#header]:mb-10">
          <HeaderTitle title="Hot Auction" link="/" />
          <NFTCards cards={CARD_AUCTIONS} type="auction"/>
        </section>

        <section className="mt-[72px]">
          <HeaderTitle title="Discover" link="/" />
          <p className="text-sm text-[#637592] mt-4 mb-10">
            151,146 items listed
          </p>
          <NFTCards cards={CARD_DISCOVER} type="discover" />

          <Button className="mt-20 flex mx-auto" variant="outline">Load More</Button>
        </section>
      </main>
    );
}