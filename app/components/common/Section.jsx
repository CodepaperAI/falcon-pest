export function Section({ children, className = "" }) {
  return <section className={`py-20 sm:py-24 ${className}`.trim()}>{children}</section>;
}
