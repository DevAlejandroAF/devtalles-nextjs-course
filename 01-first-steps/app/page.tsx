import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center p-24">
      <span className="text-5xl">Hello, World!</span>
      <Link href={'/about'} className="mt-3 text-blue-500 underline hover:text-blue-800">About</Link>
    </div>
  );
}
