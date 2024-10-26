"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthContext } from "../Context/AuthProvider";

const CommonRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user && user.role === "admin") {
      router.push("/dashboard");
    }
  }, [user, loading]);

  if (loading) return null;

  return <>{children}</>;
};

export default CommonRoute;
