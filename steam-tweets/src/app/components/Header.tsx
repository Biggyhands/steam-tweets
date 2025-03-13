import Navegation from "./navegation";

export default function Header() {
  return (
    <header className="bg-[#171a21] text-white py-2.5">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <span className="text-xl font-bold mr-2">
            STEAM <span className="">Tweets</span>
          </span>
        </div>
        <Navegation />
      </div>
    </header>
  );
}
