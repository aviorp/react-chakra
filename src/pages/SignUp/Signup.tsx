import { CLERK_COMPONENT_STYLES } from "@/utils/constants";
import { SignUp as ClerkSignup } from "@clerk/clerk-react";
import { WelcomeWrapper } from "@/components/WelcomeWrapper";
export const SignUp = () => {
  return (
    <WelcomeWrapper>
      <ClerkSignup appearance={CLERK_COMPONENT_STYLES} />
    </WelcomeWrapper>
  );
};
