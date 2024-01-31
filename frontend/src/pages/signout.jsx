import { SignedOut, SignOutButton } from "@clerk/clerk-react";

export default function SignoutPage() {
  return (
    <>
      <div>
        <SignedOut>
          <h3>Sign Out</h3>
          <SignOutButton />
        </SignedOut>
      </div>
    </>
  );
}
