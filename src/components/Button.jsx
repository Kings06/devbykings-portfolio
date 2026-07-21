function Button({
  children,
  href,
  variant = "primary",
}) {
  const primary =
    "bg-cyan-500 hover:bg-cyan-600 text-white";

  const outline =
    "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white";

  const styles =
    variant === "primary"
      ? primary
      : outline;

  return (
    <a
      href={href}
      className={`${styles} px-6 py-3 rounded-lg font-semibold transition duration-300`}
    >
      {children}
    </a>
  );
}

export default Button;