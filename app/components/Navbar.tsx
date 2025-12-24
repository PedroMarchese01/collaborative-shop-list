import Image from "next/image";

export function Navbar() {
  return (
    <nav className="flex items-center justify-center">
      <div className="flex items-center gap-6">
        <ul className="flex items-center gap-4">
          <li>Listas</li>
          <li>Compartilhar</li>
          <li>
            <Image src="/icons/sun.svg" alt="" width={24} height={24} />
          </li>
        </ul>

        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer hover:opacity-80">
          <Image src="/icons/user.svg" alt="" width={24} height={24} />
        </div>
      </div>
    </nav>
  );
}
