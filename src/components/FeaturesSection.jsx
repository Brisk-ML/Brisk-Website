import FeatureCard from "./FeatureCard";
import Button from "./Button";
import {
  PuzzlePieceIcon,
  LayoutIcon,
  PresentationChartIcon,
  DatabaseIcon,
  RulerIcon,
} from "./Icons";

const DOCS_URL = "https://docs.briskml.org/en/latest/index.html";
const STARTER_URL =
  "https://docs.briskml.org/en/latest/getting_started/quickstart/index.html";

const features = [
  {
    icon: PuzzlePieceIcon,
    title: "Modular Project Structure",
    description:
      "Split configuration into focused files for algorithms, metrics, data, and training steps to help keep your project organized",
  },
  {
    icon: LayoutIcon,
    title: "Choose Python or UI",
    description:
      "All Brisk configuration is written in Python. Want something more intuitive? Run the BriskUI locally to modify your configuration with a graphical user interface.",
  },
  {
    icon: PresentationChartIcon,
    title: "Interactive Reports",
    description:
      "Every run generates an interactive report with evaluation results, plots, and feature distributions. View model performance at a glance without writing any reporting code.",
  },
  {
    icon: DatabaseIcon,
    title: "Built-in Data Preprocessing",
    description:
      "Handle missing data, categorical encoding, scaling, and feature selection with built-in preprocessors.",
  },
  {
    icon: RulerIcon,
    title: "Extend the Framework",
    description:
      "Something missing from our provided tools? You can always add your own code alongside Brisks\u2019 tools. Turn your code into an evaluator to integrate with the generated reports.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="w-full px-8 py-24"
      style={{ background: "linear-gradient(to bottom, #181818, #121212)" }}
    >
      <div className="max-w-[1300px] mx-auto flex flex-col items-center gap-12">
        <h2 className="text-text-primary text-5xl text-center">
          Why use Brisk?
        </h2>

        <p className="text-white text-[28px] leading-[38px] text-center max-w-[1172px]">
          Brisk makes it easy to experiment with different algorithms, data
          processing and evaluation methods. Spend less time developing your own
          pipeline and more time evaluating results.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <p className="text-white text-[28px] leading-[38px] text-center max-w-[1172px]">
          Visit our documentation page to learn about all these features and
          more. Our starter guide will walk you through a simple machine
          learning project.
        </p>

        <div className="flex gap-6">
          <Button href={DOCS_URL}>Visit Docs</Button>
          <Button href={STARTER_URL}>Starter Guide</Button>
        </div>
      </div>
    </section>
  );
}
