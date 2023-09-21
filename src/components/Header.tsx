import Link from "next/link";

export const Header = () => {
  return (
    <header className="py-4">
      <div className="max-w-screen-2xl mx-auto w-full px-2">
        <Link href="/" className="hover:underline">
          <h1 className="text-3xl font-bold text-neutral-300 w-fit">hooks</h1>
        </Link>
      </div>
    </header>
  );
};
