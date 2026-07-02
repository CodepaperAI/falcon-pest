import Link from "next/link";
import { Button } from "./components/common/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-black px-4 text-center text-white">
      <div className="max-w-xl rounded-[2rem] border border-[#2A2A2A] bg-[#111111] p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">404</p>
        <h1 className="mt-4 text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-lg leading-8 text-[#BDBDBD]">The page you’re looking for may have moved or no longer exists.</p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Return Home</Button>
        </div>
      </div>
    </main>
  );
}
