import fs from "fs/promises";
import Link from "next/link";

const kebabize = (str: string) =>
  str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? "-" : "") + $.toLowerCase()
  );

export default async function Home() {
  const files = await fs.readdir("src/hooks");

  const hooks = files.map((file) => {
    const base = file.replace(/\.[^/.]+$/, "");
    return {
      name: base,
      link: `/${kebabize(base)}`,
    };
  });

  return (
    <div>
      <h1>React hooks</h1>

      <div className="mt-4">
        {hooks.map((hook) => (
          <Link key={hook.name} href={hook.link} className="hover:underline">
            <h3>{hook.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
