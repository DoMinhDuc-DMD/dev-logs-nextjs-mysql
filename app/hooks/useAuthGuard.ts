"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useAuthGuard(allowedRoles: Array<string>) {
  const router = useRouter();

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    const loggedIn = sessionStorage.getItem("isLogin");
    const userRole = sessionStorage.getItem("userRole");

    if (!userRole || !userId || !loggedIn) {
      router.replace("/Auth");
      return;
    }

    if (!allowedRoles.includes(userRole)) {
      router.replace("/main/NotYourRight");
    }
  }, [allowedRoles, router]);
}