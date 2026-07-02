export function Heading({ eyebrow, title, description, center = false, className = "" }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""} ${className}`.trim()}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-[#BDBDBD]">{description}</p> : null}
    </div>
  );
}
