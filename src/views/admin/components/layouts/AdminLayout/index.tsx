import Sidebar, { useSidebarState } from "../sidebar";
import Topbar from "../topbar";
import RequireAuth from "../../auth/reqAuth";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { mobileOpen, setMobileOpen } = useSidebarState();

  return (
    <RequireAuth>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Topbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

        <div className="flex flex-1 pt-16">
          <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

          <main className="flex-1 md:ml-64 p-4 md:p-8 bg-gray-50 min-h-[calc(100vh-64px)] overflow-x-hidden">
            <div className="max-w-7xl mx-auto w-full">
              {children}
            </div>
          </main>
        </div>
      </div>
    </RequireAuth>
  )
}