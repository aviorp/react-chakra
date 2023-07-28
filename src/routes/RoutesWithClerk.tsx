import {
  Home,
  About,
  Login,
  NotFound,
  SignUp,
  Game,
  Dashboard,
  Faq,
  Discord,
} from "@/pages";
import { CLERK_COMPONENT_STYLES } from "@/utils/constants";

import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserProfile,
  // useAuth,
} from "@clerk/clerk-react";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export const RoutesWithClerk = () => {
  // const { isSignedIn } = useAuth();

  return (
    <>
      <Routes>
        {/* {!isSignedIn && <Route path="/" element={<Home />} />} */}
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserProfile appearance={CLERK_COMPONENT_STYLES} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/games/102038"
          element={
            <ProtectedRoute>
              <Game />
            </ProtectedRoute>
          }
        />
        <Route path="/discord" element={<Discord />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/signup/*" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
