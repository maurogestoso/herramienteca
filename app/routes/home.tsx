import type { Route } from "./+types/home";
import db from "../db";

export async function loader() {
  const results = await db.execute(/* SQL */ `SELECT * FROM tools`);
  return {tools: results.rows};
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
    <h1 className="font-bold text-3xl">Herramienteca</h1>
    {tools.length ? <ul>{tools.map(tool => (
      <li>{tool.name}</li>
    ))}</ul>: <p>No tools found</p>}
  </>;
}
