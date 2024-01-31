import { SignIn, SignInButton } from "@clerk/clerk-react";

export default function SignupPage() {
  return (
    <>
      <div className="flex justify-center items-center">
        <SignIn>
          <h3>SignIn using Google</h3>
          <SignInButton />
        </SignIn>
      </div>
    </>
  );
}
