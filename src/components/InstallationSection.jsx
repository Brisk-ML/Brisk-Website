import { useState } from "react";
import Button from "./Button";

const DOCS_URL =
  "https://docs.briskml.org/en/latest/getting_started/quickstart/index.html";

function CopyIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className={className}>
      <path d="M210.83,69.17l-40-40A4,4,0,0,0,168,28H88A12,12,0,0,0,76,40V76H56A12,12,0,0,0,44,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h20a12,12,0,0,0,12-12V72A4,4,0,0,0,210.83,69.17ZM172,216a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V88a4,4,0,0,1,4-4H96.34a4,4,0,0,0,0-.56L136,44h0l.34.34L172,80.34V216Zm32-48a4,4,0,0,1-4,4H180V88a4,4,0,0,0-1.17-2.83l-40-40A4,4,0,0,0,136,44H84V40a4,4,0,0,1,4-4h78.34L204,73.66Z" />
    </svg>
  );
}

function CheckIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className={className}>
      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
    </svg>
  );
}

function CodeBlock({ children }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(children).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="relative w-full max-w-[500px] bg-bg-primary border-2 border-border px-5 py-4 group">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-1.5 rounded text-text-primary/50 hover:text-white transition-colors cursor-pointer"
        aria-label="Copy to clipboard"
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
      <pre className="text-white text-[22px] leading-relaxed whitespace-pre-wrap pr-8">
        {children}
      </pre>
    </div>
  );
}

export default function InstallationSection() {
  return (
    <section className="w-full bg-bg-secondary flex items-center justify-center px-8 py-24">
      <div className="max-w-[960px] w-full flex flex-col items-center gap-10">
        <h2 className="text-text-primary text-5xl leading-tight text-center">
          Get started in minutes
        </h2>

        <div className="flex flex-col items-center gap-6 w-full">
          <p className="text-white text-[28px] leading-relaxed text-center">
            Brisk is an open-source framework for developing machine learning
            models. Install it like any other Python package:
          </p>
          <CodeBlock>
            {`pip install briskml\n\nbrisk create -n my-project`}
          </CodeBlock>
        </div>

        <div className="flex flex-col items-center gap-6 w-full">
          <p className="text-white text-[28px] leading-relaxed text-center">
            That&apos;s all it takes! Provide your training data and you can run
            your first models:
          </p>
          <CodeBlock>
            {`cd my-project\n\nbrisk run`}
          </CodeBlock>
        </div>

        <Button href={DOCS_URL}>Learn More</Button>
      </div>
    </section>
  );
}
