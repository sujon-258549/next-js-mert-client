import CreateCategory from "@/components/modules/Dashboard/shop/Category/CreateCategory";
import { getAllCategory } from "@/server/Category";

const CategoryPage = async () => {
  const { data, meta } = await getAllCategory();
  return (
    <div className="mx-5">
      <CreateCategory data={data} meta={meta} />
    </div>
  );
};

export default CategoryPage;
