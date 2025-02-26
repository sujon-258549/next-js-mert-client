const UpdateProduct = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  console.log(productId);
  return <div>{productId}</div>;
};

export default UpdateProduct;
