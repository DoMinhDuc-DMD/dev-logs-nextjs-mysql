"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function useAuthGuard(allowedRole: Array<string>) {
  const router = useRouter();

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    const loggedIn = sessionStorage.getItem("isLogin");
    const userRole = sessionStorage.getItem("userRole");

    if (!userRole || !userId || !loggedIn) {
      router.replace("/auth");
      return;
    }

    if (!allowedRole.includes(userRole)) {
      router.replace("/main/notYourRight");
    }
  }, [allowedRole, router]);
}

export default useAuthGuard;
