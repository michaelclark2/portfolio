export default function Section({ title, colorClass, children }) {
  return (
    <section
      className={
        "flex flex-col border-black border-4 rounded-2xl px-4 shadow-lg " +
        colorClass
      }
    >
      <h2 className="text-4xl font-extrabold py-4">{title}</h2>
      {children}
    </section>
  );
}
