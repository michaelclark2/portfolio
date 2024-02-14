export default function Section({ title, colorClass, children }) {
  return (
    <section
      className={
        "flex flex-col border-black border-4 rounded-2xl p-2 " + colorClass
      }
    >
      <h2 className="text-4xl font-extrabold">{title}</h2>
      {children}
    </section>
  );
}
