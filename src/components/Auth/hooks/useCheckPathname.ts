import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const useCheckPathname = () => {
  const location = useLocation();
  const [isSignin, setIsSignin] = useState<boolean>(false);

  useEffect(() => {
    setIsSignin(location.pathname === "/signin");
  }, [location.pathname]);

  return [isSignin];
};

export default useCheckPathname;
