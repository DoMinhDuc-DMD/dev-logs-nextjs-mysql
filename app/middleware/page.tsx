import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function middleware(router: AppRouterInstance, allowwedRoles: string[]) {
  const userId = sessionStorage.getItem("userId");
  const loggedIn = sessionStorage.getItem("isLogin");
  const userRole = sessionStorage.getItem("userRole");

  if (!userRole || !userId || !loggedIn) {
    router.replace("/auth");
    return;
  }
  if (!allowwedRoles.includes(userRole)) {
    router.replace("/main/notYourRight");
  }
}
