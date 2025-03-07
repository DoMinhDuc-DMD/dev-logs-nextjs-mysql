"use client";
import { useState } from "react";
import Main from "./pages/main";
import Form from "./pages/formdevlogs";
import List from "./pages/devlogslist";
import Contract from "./pages/contract";
import AccountForm from "./pages/login";

export default function Home() {
  const [currentShow, setCurrentShow] = useState(<Main />);
  function showMain() {
    setCurrentShow(<Main />);
  }
  function showFormDevlogs() {
    setCurrentShow(<Form />);
  }
  function showDevlogsList() {
    setCurrentShow(<List />);
  }
  function showContract() {
    setCurrentShow(<Contract />);
  }
  function showAccountForm() {
    setCurrentShow(<AccountForm />);
  }

  return (
    <div className="flex">
      {/* navbar */}
      <div className="w-[15%] h-[100vh] bg-white">
        <div className="pt-50">
          <ul className="">
            <li className="py-2 pl-3 cursor-pointer" onClick={showMain}>
              Trang chủ
            </li>
            <li className="py-2 pl-3 cursor-pointer" onClick={showFormDevlogs}>
              Nhập Devlogs
            </li>
            <li className="py-2 pl-3 cursor-pointer" onClick={showDevlogsList}>
              Devlogs list
            </li>
            <li className="py-2 pl-3 cursor-pointer" onClick={showContract}>
              Contract
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-[85%] bg-gray-200">
        {/* header */}
        <div className="flex justify-between items-center w-[100%] h-12 bg-blue-300 px-6">
          <div className="flex gap-x-3">
            <div className="py-3 cursor-pointer">Toggle Icon</div>
            <div className="py-3 cursor-pointer" onClick={showMain}>
              Trang chủ
            </div>
          </div>
          <div className="flex gap-x-3">
            <div className="hover:bg-gray-400 py-3 cursor-pointer">
              Bell Icon
            </div>
            <div
              className="hover:bg-gray-400 py-3 cursor-pointer"
              onClick={showAccountForm}
            >
              Dropdown
            </div>
          </div>
        </div>

        {/* content */}
        {currentShow}
      </div>
    </div>
  );
}
