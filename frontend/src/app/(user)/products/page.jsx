import { getCategories } from "@/services/categoryService";
import { getProduct } from "@/services/productService";
import Link from "next/link";

const Products = async () => {
  const { products } = getProduct();
  const { categories } = getCategories();

  return (
    <div>
      <h1>صفحه محصولات</h1>
      <div className="grid grid-cols-4">
        {
          categories.map(category => (
            <div key={category._id}>
              <Link href={``}>
                {category.title}
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Products;
