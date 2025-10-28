export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md :text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Enthusiast
            </h3>
            <p className="text-muted-foreground">
              I’m all about turning ideas into smooth, engaging websites. After
              plenty of time experimenting with front-end tools and frameworks,
              I’ve learned how to keep things fast, accessible, and easy to use
              without losing the polish.
            </p>
            <p className="text-muted-foreground">
              In my free time you’ll usually find me exploring what other
              creative developers are building—sketches, prototypes, wild
              experiments. Seeing how they approach problems keeps me inspired
              and sparks new ideas for my own work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
};
