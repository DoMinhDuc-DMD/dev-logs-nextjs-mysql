"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type AllowedRole = "Admin" | "HR" | "Leader" | "Developer";

export default function useAuthGuard(allowedRoles: AllowedRole[]) {
  const router = useRouter();

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    const loggedIn = sessionStorage.getItem("isLogin");
    const userRole = sessionStorage.getItem("userRole") as AllowedRole;

    if (!userRole || !userId || !loggedIn) {
      router.replace("/auth");
      return;
    }

    if (!allowedRoles.includes(userRole)) {
      router.replace("/main/notYourRight");
    }
  }, [allowedRoles, router]);
}
