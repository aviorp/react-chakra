import { SignIn } from "@clerk/clerk-react";
import { CLERK_COMPONENT_STYLES } from "@/utils/constants";
import { WelcomeWrapper } from "@/components/WelcomeWrapper";

export const Login = () => {
  return (
    <WelcomeWrapper>
      <SignIn appearance={CLERK_COMPONENT_STYLES} />
    </WelcomeWrapper>
  );
};
