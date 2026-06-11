import Navbar from "../navbar";
import Footer from "../footer";
import FloatingWhatsapp from "../FloatingWhatsapp";
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
      {!isAdminRoute && !is404Route && <FloatingWhatsapp />}
    </main>
  );
};

export default AppShell;
