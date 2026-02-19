import HeroBackground from "./HeroBackground";
import Header from "./Header";
import Button from "./Button";

const QUICKSTART_URL =
  "https://docs.briskml.org/en/latest/getting_started/quickstart/index.html";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
      <HeroBackground />
      <Header />

      <div className="relative z-[1] flex flex-col justify-between h-full max-w-[85vw] mx-auto px-[clamp(1.5rem,3.3vw,5rem)] pt-[clamp(5rem,14vh,10rem)] pb-[clamp(2rem,5vh,4rem)]">
        <div>
          <h1 className="text-text-primary text-[clamp(1.75rem,2.5vw,3.5rem)] leading-snug max-w-[clamp(280px,36vw,650px)]">
            Structured machine learning experimentation with scikit-learn
          </h1>
        </div>

        <div className="flex justify-between items-end gap-[clamp(2rem,3vw,5rem)]">
          <Button href={QUICKSTART_URL}>Get Started</Button>
          <p className="text-text-primary text-[clamp(0.875rem,1.25vw,1.625rem)] leading-relaxed max-w-[clamp(280px,39vw,700px)] text-left">
            Brisk is a Python framework that brings structure to your
            scikit-learn workflow. Get interactive reports, built-in evaluation
            methods and reproducible results out of the box.
          </p>
        </div>
      </div>
    </section>
  );
}
