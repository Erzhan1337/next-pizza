import Image from "next/image";
import { ArrowRight, SearchIcon, ShoppingCart, User } from "lucide-react";

function Header() {
  return (
    <header className="flex items-center justify-between w-full pb-10 border-b border-gray-200">
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
        <div>
          <h1 className="font-black text-2xl tracking-wider">Next Pizza</h1>
          <p className="text-sm text-gray-400">вкусней уже некуда</p>
        </div>
      </div>
      {/*SEARCH BAR*/}
      <div className="flex items-center bg-[#F9F9F9] rounded-xl shadow-md">
        <SearchIcon className="text-[#ADADAD] ml-4" />
        <input
          type="text"
          placeholder="Поиск пиццы..."
          className="outline-0 w-[600px] py-2 pl-2"
        />
      </div>
      {/*INFO*/}
      <div className="text-[#FE5F00] flex items-center gap-2">
        <div className="group">
          <button className="flex items-center cursor-pointer gap-1 border border-[#fe5f00] rounded-xl p-3 group-hover:text-white group-hover:bg-[#fe5f00] transition-all duration-300">
            <User />
            Войти
          </button>
        </div>
        <div className="flex items-center bg-[#fe5f00] text-white px-2 py-1 rounded-xl">
          <div className="py-1 px-2 border-r border-white my-1">
            <span>0 ₽</span>
          </div>
          <div className="py-1 px-2 group relative overflow-hidden">
            <div className="flex items-center gap-1 group-hover:translate-x-11 transition-all duration-500">
              <ArrowRight className="absolute top-0 -left-7 right-1" />
              <ShoppingCart className="w-5 h-5" />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
