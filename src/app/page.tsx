import Category from "@/components/shared/Category";
import Products from "@/components/shared/Products";
import Filter from "@/components/shared/Filter";

export default function Home() {
  return (
    <div className="pt-10">
      <p className="text-3xl font-extrabold mb-5">Все Пиццы</p>
      <Category />
      <p className="text-xl font-bold mt-7">Фильтрация</p>
      <div className='flex mt-4'>
        <Filter />
        <Products />
      </div>
    </div>
  );
}
