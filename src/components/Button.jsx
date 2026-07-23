function Button({
  children,
  href,
  variant = "primary",
  target,
}) {
  const primary =
    "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white shadow-lg shadow-cyan-500/20 hover:-translate-y-1 hover:shadow-purple-500/30";

  const outline =
    "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white hover:-translate-y-1";

  const styles =
    variant === "primary"
      ? primary
      : outline;

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className={`${styles} inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300`}
    >
      {children}
    </a>
  );
}

export default Button;