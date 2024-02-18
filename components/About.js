export default function About() {
  return (
    <section className="flex flex-col sm:flex-row justify-between m-auto w-full">
      <div className="flex justify-center items-center sm:mr-5 mx-auto">
        <img
          src="./profile.jpg"
          className="rounded-2xl border-4 border-black sm:min-h-64 sm:min-w-64 max-h-44 mb-12 sm:mb-0"
        />
      </div>
      <div className="w-full flex flex-col">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-2 sm:mb-4 text-nowrap">
          Michael Clark
        </h1>
        <p className="font-semibold pr-8 mb-4 text-lg">
          Full-stack software engineer with a passion for building beautiful,
          performant systems to scale.
        </p>
        <p className="font-semibold pr-8 text-lg">I'd rather be camping. 🏕️</p>
      </div>
    </section>
  );
}
