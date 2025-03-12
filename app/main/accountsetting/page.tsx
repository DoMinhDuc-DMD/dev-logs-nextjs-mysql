"use client";

import { useRouter } from "next/navigation";

export default function AccountSetting() {
  const router = useRouter();
  const handleLogout = () => {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userRole");
    sessionStorage.removeItem("isLogin");
    router.replace("/auth/login");
  };

  return (
    <div className="p-5">
      <div className="rounded bg-white text-center">
        <p>Account Setting</p>
        <button
          onClick={handleLogout}
          className="bg-blue-400 p-2 mt-5 rounded cursor-pointer hover:bg-blue-600 hover:text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
