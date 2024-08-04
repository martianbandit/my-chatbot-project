import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
      <Link href="/chatbot">Chatbot</Link>
    </nav>
  );
}