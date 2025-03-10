"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function useAuth(requiredRole: string | null = null) {
  const router = useRouter();
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const token = sessionStorage.getItem("authToken");
    const role = sessionStorage.getItem("userRole");

    if (!isMounted) {
      setIsMounted(true);
    }

    if (token && role) {
      setUserRole(role);
      if (isMounted) {
        router.replace("/main");
      }
    } else {
      if (isMounted) {
        router.replace("/login");
      }
    }
  }, [router, isMounted]);

  if (!isMounted) return null;

  return userRole;
}
