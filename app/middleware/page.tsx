import { useRouter } from "next/navigation";

export default function middleware(router: ReturnType<typeof useRouter>, allowedRoles: string[]) {
  const userId = sessionStorage.getItem("userId");
  const loggedIn = sessionStorage.getItem("isLogin");
  const userRole = sessionStorage.getItem("userRole");

  if (!userRole || !userId || !loggedIn) {
    router.replace("/auth");
    return;
  }
  if (!allowedRoles.includes(userRole)) {
    router.replace("/main/notYourRight");
  }
}
