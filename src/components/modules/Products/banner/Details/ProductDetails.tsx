"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Minus, Plus, Star } from "lucide-react";
import { TProduct } from "@/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductContact from "../Contact/Contact";

const ProductDetails = ({ data }: { data: TProduct }) => {
  console.log(data);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("black");
  const colors = ["black", "red", "white", "gray", "silver"];

  return (
    <section className="container">
      <div className="">
        <div className="grid md:grid-cols-2 gap-8 p-6 border-2 rounded-md my-10 border-white">
          {/* Product Images Grid */}
          <div className="h-[100%] flex flex-col">
            <div className="h-[70%] mb-5 rounded-md b-5 bg-white flex justify-center items-center">
              <img
                src={data.imageUrls[0]}
                className="w-[200px]  object-contain  rounded-md"
              />
            </div>
            <div className="h-[30%] grid grid-cols-3 gap-2">
              {data?.imageUrls?.map((img, index) => (
                <div
                  key={index}
                  className="bg-white flex justify-center items-center rounded-md"
                >
                  <img src={img} className="w-[100px] rounded-md" />
                </div>
              ))}
            </div>
            <div></div>
          </div>

          {/* Product Details */}
          <Card className="p-6 space-y-4">
            <h1 className="text-2xl font-semibold">{data?.name}</h1>
            <p className="text-gray-500">
              {data?.description} Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, impedit mollitia facere porro ducimus
              eius officia omnis consequuntur ab illo ut error ullam tenetur
              repellat animi. Ut nesciunt soluta corporis.
            </p>

            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-medium">4.9 Ratings</span>
              <Badge variant="outline">720+ Reviews</Badge>
              <Badge variant="outline">1092+ Sold</Badge>
              <Badge variant="outline">
                Brand: <span className="font-semibold">{data.brand.name}</span>
              </Badge>
            </div>

            <p className="text-xl font-bold">Price: ${data?.price}</p>

            <div>
              <p className="font-semibold">
                Color: <span className="capitalize">{selectedColor}</span>
              </p>
              <div className="flex gap-2 mt-2">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? "border-black" : "border-red"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="font-semibold">Quantity</p>
              <div className="flex items-center border rounded-lg px-2">
                <button
                  disabled={quantity <= 1}
                  onClick={() => setQuantity(quantity - 1)}
                >
                  <Minus className="w-5 h-5 text-gray-500" />
                </button>
                <span className="px-4">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              <p className="text-gray-500">Stock Available: {data?.stock}</p>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" className="w-full">
                Add to cart
              </Button>
              <Button className="w-full">Buy Now</Button>
            </div>

            <p className="text-sm text-gray-500 text-center">
              Any problem with this product?{" "}
              <span className="text-blue-600 cursor-pointer">
                Report Product
              </span>
            </p>
          </Card>
        </div>
      </div>
      {/* tab */}
      <section className="bg-white mb-10 p-5 rounded-md">
        <Tabs defaultValue="Descriptions" className="">
          <TabsList className="bg-white">
            <TabsTrigger value="Descriptions">Descriptions</TabsTrigger>
            <TabsTrigger value="Specification">Specification</TabsTrigger>
            <TabsTrigger value="Shipping">Shipping Information</TabsTrigger>
            <TabsTrigger value="Seller">Seller Information</TabsTrigger>
          </TabsList>
          <div className="px-3 w-full">
            <TabsContent value="Descriptions" className="w-full">
              {data?.description} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Tenetur, qui illo sit impedit obcaecati
              temporibus voluptatibus vero magni sapiente maiores inventore.
              Quae nesciunt pariatur commodi nulla aliquid! Praesentium labore
              suscipit harum quisquam rerum atque. Ducimus fugiat quas, quis
              esse id aliquam eveniet adipisci vitae iure reiciendis dolor
              aperiam quisquam maiores!
              <h3 className="text-xl mt-5 font-semibold">keyFeatures</h3>
              {data?.keyFeatures.map((future, index) => (
                <li key={index}>{future}</li>
              ))}
            </TabsContent>
            <TabsContent value="Specification">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur praesentium quas unde debitis id, a iusto sapiente
              perferendis dolorum ullam exercitationem! Sint minus doloremque,
              saepe autem quia quam voluptatibus similique. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Incidunt impedit illum
              voluptate, sapiente praesentium perspiciatis eaque temporibus
              mollitia ipsa deleniti beatae consequatur. Ab natus rerum
              voluptatem aliquam blanditiis mollitia, illo exercitationem
              repudiandae laborum perspiciatis tempora, possimus veniam pariatur
              consequatur neque asperiores et harum! Ab aperiam dolores
              accusamus ducimus nulla quis animi fuga ipsum sapiente sunt quidem
              iusto tempora alias doloribus rerum blanditiis, at debitis ut vel
              voluptas non. Mollitia nobis eveniet consequatur veritatis
              accusantium quam pariatur atque perferendis? Earum sapiente
              repudiandae, dicta quia similique at repellat magnam ducimus
              cupiditate recusandae, culpa dolores. Molestiae atque voluptatibus
              nesciunt excepturi. Assumenda quos alias numquam dicta fugit ad
              velit animi corrupti architecto? Sit unde, quod quas, dolorem
              voluptas saepe culpa consectetur in iure doloribus assumenda sint
              veniam minus maxime aliquid quia quaerat vel dolore dolores
              cupiditate sed nulla officiis. Dolore aut praesentium
              exercitationem explicabo fugit aperiam ab modi voluptatem nulla,
              ullam eum assumenda atque tempore veritatis vel recusandae
              voluptatibus. Quaerat explicabo inventore vel, minus et unde
              itaque eligendi dolor eum illum nemo. Libero totam maxime
              obcaecati, magni modi corrupti ipsum cupiditate ad quisquam
              molestiae vero nihil. Saepe modi quasi perferendis aut recusandae
              nesciunt, perspiciatis magni. Ducimus, aspernatur dolorem. Quos,
              aspernatur error. Laborum aut asperiores quam doloremque eaque
              recusandae molestiae. Laboriosam, odit. Vitae, veritatis quaerat?
              Hic blanditiis quae minus reiciendis ratione cupiditate
              reprehenderit a placeat, tenetur fugiat eaque ullam perferendis
              doloremque, perspiciatis ex, repudiandae error neque eius tempore
              unde tempora necessitatibus. Facere sequi excepturi accusantium.
              Illo voluptatibus error non delectus perspiciatis laborum
              voluptates voluptatum iusto.
            </TabsContent>
            <TabsContent value="Shipping">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              accusamus beatae aliquam cupiditate nesciunt voluptate porro minus
              omnis possimus, perspiciatis, ab nostrum dicta unde aliquid
              aspernatur blanditiis voluptatem eaque soluta, enim tenetur!
              Aspernatur minus hic cupiditate sapiente, alias ab quasi cum nisi
              doloribus labore aliquam, unde harum dolorem, non aperiam voluptas
              delectus! Facilis aperiam quam quisquam vero, quis reprehenderit
              aut assumenda magnam consectetur quidem veritatis unde nam
              perspiciatis qui, recusandae sequi! Velit, quas. Numquam eos a
              sequi ducimus, velit esse amet consectetur, nisi rem doloribus
              beatae perspiciatis doloremque nemo culpa cupiditate repudiandae
              suscipit temporibus, repellendus nesciunt ratione autem! Quos,
              cupiditate aliquid aspernatur impedit reprehenderit eligendi,
              beatae placeat magnam incidunt quas similique sunt. Nemo,
              assumenda aspernatur error porro debitis doloremque repudiandae ut
              voluptatem saepe repellendus accusamus neque asperiores excepturi
              pariatur perspiciatis, explicabo harum esse ducimus animi est.
              Repellendus dignissimos quam doloribus fuga amet, nihil, dicta
              accusamus aspernatur aliquam optio rerum dolores dolor natus minus
              doloremque laboriosam necessitatibus ut quasi vero in harum illo
              error commodi. Quae doloremque ipsa veniam repudiandae molestiae a
              hic libero! Quibusdam nostrum laborum quod, officia voluptas
              tempore, quisquam voluptatum pariatur est nam exercitationem,
              autem quam alias blanditiis! Aspernatur molestiae, minima
              obcaecati dignissimos quidem temporibus repellat necessitatibus
              distinctio. Sed totam quia sint ut nulla, officiis dignissimos?
              Ullam minus cupiditate exercitationem natus necessitatibus
              architecto soluta, nemo excepturi sed fuga similique commodi,
              voluptatibus explicabo pariatur temporibus iste atque magni rem
              voluptate! Rem sed iure est in, possimus totam dignissimos maxime
              eius incidunt illum, eos doloribus vitae cum assumenda amet
              voluptate quas. Commodi consectetur inventore distinctio quo
              nostrum ipsa ratione, laborum magnam! Tempora, inventore expedita
              ipsam quisquam natus quis quod incidunt, placeat amet consequatur
              nemo possimus voluptate reiciendis! Natus enim voluptates nihil
              esse molestias accusantium error reprehenderit, delectus eaque
              sunt soluta ea provident dolores unde! Minus aperiam eum omnis
              deleniti provident.
            </TabsContent>
            <TabsContent value="Seller">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              placeat optio maiores neque delectus voluptatibus minima velit
              debitis sit recusandae sed aspernatur quibusdam similique eius,
              quod ipsum, maxime deleniti dignissimos? Possimus doloribus
              adipisci soluta voluptates, nobis eius consequatur laudantium
              alias maxime laboriosam nemo nihil molestias, quasi natus eum
              quaerat temporibus, quis modi earum error similique nam odio
              delectus assumenda. Culpa eveniet nesciunt, quia vitae debitis
              ducimus dolores corrupti vel hic animi explicabo minus eum iusto
              ex cumque veritatis placeat neque repudiandae dolorem quis.
              Laborum ratione illo tempora atque officia veniam quae rem quas,
              explicabo cum officiis mollitia perferendis, recusandae iusto!
            </TabsContent>
          </div>
        </Tabs>
      </section>
      <div className="pt-10">
        <ProductContact />
      </div>
    </section>
  );
};

export default ProductDetails;
