export default function About() {
  return (
    <section className="flex flex-row justify-between m-auto w-full">
      <div className="sm:w-1/6 sm:flex justify-center items-center mr-5 hidden">
        <img
          src="./profile.jpg"
          className="rounded-2xl border-4 border-black max-h-32"
        />
      </div>
      <div className="sm:w-5/6 w-full flex flex-col justify-between">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-2 sm:mb-0">
          Michael Clark
        </h1>
        <p className="sm:leading-tight text-semibold pr-8">
          Full-stack software engineer with a passion for building beautiful,
          performant systems to scale. I'd rather be camping.
        </p>
      </div>
    </section>
  );
}
