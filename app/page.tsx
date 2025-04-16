"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AccountForm() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/Auth");
  }, [router]);
  return <div>Redirecting to login...</div>;
}
