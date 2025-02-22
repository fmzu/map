import { useSession } from "@hono/auth-js/react"
import { Outlet } from "@remix-run/react"
import MainHeader from "~/routes/_main/components/main-header"

export default function MainLayout() {
  const session = useSession()

  if (session.status === "loading") {
    return <p>{"loading"}</p>
  }

  //ログインしていない場合はログインページにリダイレクト
  // if (session.status === "unauthenticated") {
  //   return <LoginPage />
  // }

  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  )
}
