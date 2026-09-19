export default function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
      className={`arrow ${className}`}
    >
      <path d="M0 5h16M12 1l4 4-4 4" />
    </svg>
  );
}
