"use client";

import CheckBox from "@/common/CheckBox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function CategorySidebar({ categories }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const categoryHandler = (e) => {
    const value = e.target.value;
    if (selectedCategories.includes(value)) {
      const categories = selectedCategories.filter((c) => c !== value);
      setSelectedCategories(categories);
      params.set("category", categories);
      params.toString();
      router.push(pathname + "?" + params.toString());
    } else {
      setSelectedCategories([...selectedCategories, value]);
      params.set("category", [...selectedCategories, value]);
      params.toString();
      router.push(pathname + "?" + params.toString());
    }
  };

  return (
    <div className="col-span-1">
      <p className="font-bold mb-4">دسته بندی ها</p>
      <ul className="space-y-4">
        {categories.map((category) => (
          <CheckBox
            key={category._id}
            id={category._id}
            value={category.englishTitle}
            name="product-type"
            label={category.title}
            onChange={categoryHandler}
            checked={selectedCategories.includes(category.englishTitle)}
          />
        ))}
      </ul>
    </div>
  );
}
