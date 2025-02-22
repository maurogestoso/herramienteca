import { db } from "~/db";
import type { Route } from "./+types/home";
import { toolsTable } from "~/db/schema";

export async function loader() {
  const tools = await db.select().from(toolsTable);
  return {tools};
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Herramienteca" },
    { name: "description", content: "Una biblioteca de herramientas para mi comunidad local" },
  ];
}

export default function Home({loaderData}: Route.ComponentProps) {
  const {tools} = loaderData;
  return <>
    <h1 className="font-bold text-3xl mb-4">Herramienteca</h1>
    {tools.length ? (
      <ul className="list-disc list-inside">{tools.map(tool => (
        <li>{tool.name}</li>
      ))}</ul>
    ) : <p>No tools found</p>}
  </>;
}
