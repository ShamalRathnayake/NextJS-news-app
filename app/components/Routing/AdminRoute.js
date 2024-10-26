"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthContext } from "../Context/AuthProvider";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || user.role !== "admin")) {
      router.push("/");
    }
  }, [user, loading]);

  if (loading || !user || user.role !== "admin") return null;

  return <>{children}</>;
};

export default AdminRoute;
