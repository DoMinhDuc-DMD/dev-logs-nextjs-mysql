"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AccountForm() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/auth/login");
  }, []);
  return <div>Redirecting to login...</div>;
}
