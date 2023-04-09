import { useRouter } from "next/router";
import { useEffect } from "react";

const Store = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);

  return;
};
export default Store;
