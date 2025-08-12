import SortPopUp from "@/components/ui/SortPopUp";
import CategorySort from "@/components/ui/CategorySort";

function Category() {
  return (
    <div className="flex justify-between items-center">
      {/*LEFT*/}
      <CategorySort />
      {/*RIGHT*/}
      <SortPopUp />
    </div>
  );
}

export default Category;
