import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { RoutesWithClerk } from "@/routes";
import { useAuth } from "@clerk/clerk-react";
import { addToken } from "@/api";
import { useIdleTimer } from "react-idle-timer";
import { Box } from "@chakra-ui/react";
import { useEventListener } from "usehooks-ts";
import { useState } from "react";

const MainLayout = () => {
  const { pathname } = useLocation();

  const [toggleBlankNavbar, setToggleBlankNavbar] = useState<boolean>(false);

  const handleSize = (e: any) => {
    const scrollY = e.currentTarget.scrollY;
    scrollY > 80 ? setToggleBlankNavbar(true) : setToggleBlankNavbar(false);
  };

  useEventListener("scroll", handleSize);

  const { isLoaded, userId, isSignedIn, getToken, signOut } = useAuth();
  getToken().then((token) => {
    addToken(token as string);
  });

  const c = useIdleTimer({
    timeout: 1000 * 60 * 10, // 10 minutes
    onIdle: () => {
      if (isSignedIn) signOut();
    },
    onActive: () => {
      console.log("user is active");
      console.log("time remaining", c.getRemainingTime());
    },
    // onAction: () => {
    //   console.log("user did something");
    // }
  });

  const shouldShowNavbar = () => {
    if (!isLoaded || !userId) {
      return false;
    }
    return pathname !== "/login" && pathname !== "/signup";
  };

  return (
    <Box w={"100%"}>
      {shouldShowNavbar() && <Navbar toggleBlankNavbar={toggleBlankNavbar} />}
      <RoutesWithClerk />
    </Box>
  );
};

export default MainLayout;
