import { images } from "@/utils/images";

export function ProductList() {
    return (
      <section className="flex items-center gap-10 justify-between flex-wrap">
        <img src={images.Product1} alt="product" />
        <img src={images.Product2} alt="product" />
        <img src={images.Product3} alt="product" />
        <img src={images.Product1} alt="product" />
      </section>
    );
}