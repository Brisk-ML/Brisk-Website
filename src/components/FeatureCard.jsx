export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="w-[360px] h-[280px] bg-bg-secondary border-[1.6px] border-border p-5 flex flex-col items-center gap-3 overflow-hidden">
      <div className="w-14 h-14 bg-bg-primary border border-border flex items-center justify-center shrink-0">
        <Icon className="w-9 h-9 text-white" />
      </div>
      <h3 className="text-white text-[clamp(18px,1.8vw,28px)] leading-tight text-center">
        {title}
      </h3>
      <p className="text-white text-[clamp(13px,1.2vw,19px)] leading-[1.35] text-center">
        {description}
      </p>
    </div>
  );
}
