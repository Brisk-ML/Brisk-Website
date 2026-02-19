import { GitHubIcon, FilesIcon } from "./Icons";

function NavLink({ icon: Icon, label, labelPosition = "right", href = "#" }) {
  return (
    <a href={href} className={`nav-link nav-link--${labelPosition}`}>
      {/* Single glow element — covers icon area and expands to reveal label */}
      <div className={`nav-link__glow nav-link__glow--${labelPosition}`}>
        <span className="nav-link__label">{label}</span>
      </div>
      {/* Icon sits on top */}
      <Icon className="w-10 h-10 text-white relative z-[1]" />
    </a>
  );
}

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-10 flex items-center px-10 py-5">
      <span className="text-text-primary text-xl font-medium tracking-tight">
        Brisk
      </span>

      <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">
        <NavLink
          icon={FilesIcon}
          label="Documentation"
          labelPosition="left"
          href="https://docs.briskml.org/en/latest/index.html"
        />
        <div className="w-[2px] h-8 bg-white rounded-full" />
        <NavLink
          icon={GitHubIcon}
          label="GitHub"
          labelPosition="right"
          href="https://github.com/Brisk-ML/brisk"
        />
      </nav>
    </header>
  );
}
