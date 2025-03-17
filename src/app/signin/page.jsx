import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function SignIn(){
    return (
        <div>
            <SignedOut>
        <h2>Welcome, Guest!</h2>
        <p>Please sign in or sign up to continue.</p>

        {/* SignInButton: Trigger the sign-in flow */}
        <SignInButton>
          Sign In
        </SignInButton>

        {/* SignUpButton: Trigger the sign-up flow */}
        <SignUpButton>
          Sign Up
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <h2>Welcome Back!</h2>
        <p>You're logged in and ready to go.</p>

        {/* UserButton: Display user's profile and provides a sign-out option */}
        <UserButton />

        {/* You can also conditionally render other parts of your app for signed-in users */}
        <div>
          <h3>Your Dashboard</h3>
          <p>Here’s your private content.</p>
        </div>
      </SignedIn>
        </div>
    )
}