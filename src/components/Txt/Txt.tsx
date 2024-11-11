"use client";

import React, { useState } from "react";
import Sign from "../Sign/Sign";
import { logIn, signUp } from "@/data";

interface TxtProps {
  link: string;
}

const Txt = ({ link }: TxtProps) => {
  const [signType, setSignType] = useState<string | null>(null);

  const showLogin = () =>
    setSignType((prev) => (prev === "login" ? null : "login"));
  const showSignUp = () =>
    setSignType((prev) => (prev === "signup" ? null : "signup"));
  const closeSign = () => setSignType(null);

  return (
    <div
      onClick={() => (link === "Log In" ? showLogin() : showSignUp())}
      className="cursor-pointer text-main-color ml-2 font-semibold"
    >
      <span> {link}</span>

      {signType && (
        <Sign
          head={signType === "login" ? "Log In" : "Create an Account"}
          inputs={signType === "login" ? logIn : signUp}
          btnOne={signType === "login" ? "Sign In" : "Sign Up"}
          btnTwo={
            signType === "login" ? "Sign In with Google" : "Sign Up with Google"
          }
          login={signType === "login"}
          note={
            signType === "login"
              ? "Don’t have an account?"
              : "Already have an account?"
          }
          link={signType === "login" ? "Sign Up" : "Log In"}
          closeSign={closeSign}
        />
      )}
    </div>
  );
};

export default Txt;
