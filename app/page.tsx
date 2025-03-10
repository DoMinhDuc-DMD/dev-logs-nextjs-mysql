"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AccountForm() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, []);
  return <div>Redirecting to login...</div>;
}
