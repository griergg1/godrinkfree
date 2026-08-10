type LogoProps = {
  className?: string
  markOnly?: boolean
}

/** Playful rising-drop mark — gamey, not clinical */
export function Logo({ className = '', markOnly = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="shrink-0"
      >
        <rect width="40" height="40" rx="12" fill="#0B0E11" />
        <path
          d="M20 8c-4.2 5.5-8 9.8-8 14.2a8 8 0 0 0 16 0C28 17.8 24.2 13.5 20 8Z"
          fill="#00C805"
        />
        <circle cx="17.5" cy="18" r="2.2" fill="white" fillOpacity="0.9" />
        <path
          d="M26 11l1.2 2.4 2.6.4-1.9 1.8.5 2.6L26 17l-2.4 1.2.5-2.6-1.9-1.8 2.6-.4L26 11Z"
          fill="#FFB800"
        />
      </svg>
      {!markOnly && (
        <span className="text-[1.2rem] font-extrabold tracking-[-0.04em]">
          Drink Free
        </span>
      )}
    </span>
  )
}
