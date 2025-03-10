import Link from "next/link";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="w-[15%] h-[100vh] bg-white">
        <div className="pt-50">
          <ul className="">
            <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">
              <Link href="/main">Trang chủ</Link>
            </li>
            <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">
              <Link href="/main/formdevlogs">Nhập Devlogs</Link>
            </li>
            <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">
              <Link href="/main/devloglist">Devlogs list</Link>
            </li>
            <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">
              <Link href="/main/contract">Contract</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-[85%] bg-gray-200">
        <div className="flex justify-between items-center w-[100%] h-12 bg-blue-300 px-6">
          <div className="flex gap-x-3">
            <div className="py-3 cursor-pointer hover:bg-gray-400">
              Toggle Icon
            </div>
            <div className="py-3 cursor-pointer hover:bg-gray-400">
              <Link href="/main">Trang chủ</Link>
            </div>
          </div>
          <div className="flex gap-x-3">
            <div className="hover:bg-gray-400 py-3 cursor-pointer">
              Bell Icon
            </div>
            <div className="hover:bg-gray-400 py-3 cursor-pointer">
              <Link href="/">Drop down</Link>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
