"use client";

import "../globals.css";
import "../../styles/auth.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import cactus from "@/public/assets/cactus.svg";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    // No auth yet — just redirect
    router.push("/notes");
  };
  

  return (
    <div className="auth-page">
      <Image src={cactus} alt="Cactus" className="auth-image" />

      <h1 className="auth-title">Yay, You&apos;re Back!</h1>

      <input className="auth-input" placeholder="Email address" />
      <input className="auth-input" placeholder="Password" type="password" />

      <button className="auth-button" onClick={handleLogin}>Login</button>

      <a href="/register" className="auth-link">
        Oops! I&apos;ve never been here before
      </a>
    </div>
  );
}
