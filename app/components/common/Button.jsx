import Link from "next/link";

export function Button({ children, href, variant = "primary", className = "", ...props }) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-black";
  const variants = {
    primary: "bg-[#D4AF37] text-black hover:bg-[#C9A227] shadow-[0_0_30px_rgba(212,175,55,0.2)]",
    secondary: "border border-[#2A2A2A] bg-transparent text-white hover:border-[#D4AF37] hover:text-[#D4AF37]",
    ghost: "bg-transparent text-[#D4AF37] hover:bg-[#181818]",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`.trim();

  if (href) {
    // Handle tel: links with anchor tag
    if (href.startsWith("tel:")) {
      return (
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      );
    }
    
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
