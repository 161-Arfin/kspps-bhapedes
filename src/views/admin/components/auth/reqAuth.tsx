import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function RequireAuth({
  children
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [ok, setOk] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) router.replace("/admin/auth/login");
    else setOk(true);
  }, [router]);

  if (!ok) return null;
  return <>{children}</>;
}