export default function Button({ children, href = "#", className = "" }) {
  return (
    <a href={href} className={`cta-button ${className}`}>
      {children}
    </a>
  );
}
