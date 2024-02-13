import { sql } from "@vercel/postgres";
const { rows } = await sql`select * from projects`;

export default function Home() {
  return (
    <div>
      <h1 className="text-6xl font-bold text-center">Michael Clark</h1>
      {rows.map((row) => (
        <p key={row.id}>{row.name}</p>
      ))}
    </div>
  );
}
