interface SocialLinkProps {
  href: string;
  ariaLabel: string;
  iconPath: string;
}

export default function SocialLink({
  href,
  ariaLabel,
  iconPath,
}: SocialLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      {...(isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      className="rounded-full border border-border p-3 text-foreground transition-colors hover:bg-muted"
      aria-label={ariaLabel}
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path
          d={iconPath}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    </a>
  );
}
