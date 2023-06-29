import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const usePathname = () => {
  const { pathname } = useLocation();
  const [isSignin, setIsSignin] = useState<boolean>(false);

  useEffect(() => {
    setIsSignin(pathname === "/signin");
  }, [pathname]);

  return isSignin;
};

export default usePathname;
