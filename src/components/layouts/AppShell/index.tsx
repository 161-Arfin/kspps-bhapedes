import Navbar from "../navbar";
import Footer from "../footer";
import { useRouter } from "next/router";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  const isAdminRoute = pathname.startsWith("/admin");
  const is404Route = pathname.startsWith("/404");

  return (
    <main>
      {!isAdminRoute && !is404Route && <Navbar />}
      {children}
      {!isAdminRoute && !is404Route && <Footer />}
    </main>
  );
};

export default AppShell;
