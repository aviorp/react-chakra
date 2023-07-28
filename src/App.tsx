import "./App.css";
import MainLayout from "@/layouts/MainLayout";
import { ClerkProvider } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryFallback } from "./components/ErrorBoundaryFallback";
const clerkPublicKey = import.meta.env
  .VITE_REACT_APP_CLERK_PUBLISHABLE_KEY as string;

if (!clerkPublicKey) {
  throw "Missing Publishable Key";
}

const App = () => {
  const navigate = useNavigate();
  return (
    <ErrorBoundary fallbackRender={ErrorBoundaryFallback}>
      <ClerkProvider
        appearance={{
          layout: {
            showOptionalFields: true,
            socialButtonsPlacement: "top",
            socialButtonsVariant: "iconButton",
            helpPageUrl: "/help",
            privacyPageUrl: "/privacy",
            termsPageUrl: "/terms",
            shimmer: true,
          },
        }}
        publishableKey={clerkPublicKey}
        navigate={(to: string) => navigate(to)}
      >
        <MainLayout />
      </ClerkProvider>
    </ErrorBoundary>
  );
};

export default App;
