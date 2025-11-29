import "../globals.css";
import "../../styles/auth.css";
import Image from "next/image";
import cat from "@/public/assets/cat.svg";

export default function RegisterPage() {
  return (
    <div className="auth-page">
      <Image src={cat} alt="Cat" className="auth-image" />

      <h1 className="auth-title">Yay, New Friend!</h1>

      <input className="auth-input" placeholder="Email address" />
      <input className="auth-input" placeholder="Password" type="password" />

      <button className="auth-button">Sign Up</button>

      <a href="/login" className="auth-link">
        We&apos;re already friends!
      </a>
    </div>
  );
}
