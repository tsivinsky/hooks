import Link from "next/link";

const hooks = [
  {
    name: "useChoiceState",
    link: "/use-choice-state",
  },
];

export default function Home() {
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
