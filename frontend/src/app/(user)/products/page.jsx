import { getCategories } from "@/services/categoryService";
import { getProduct } from "@/services/productService";
import CategorySidebar from "./CategorySidebar";

const Products = async () => {
  const { products } = getProduct();
  const { categories } = getCategories();

  return (
    <div>
      <h1 className="text-xl font-bold mb-6">صفحه محصولات</h1>
      <div className="grid grid-cols-4">
        <CategorySidebar categories={categories} />
        <div className="col-span-3 grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div className="col-span-1 border rounded-xl shadow-md p-4" key={product._id}>
              <h2 className="font-bold">{product.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
