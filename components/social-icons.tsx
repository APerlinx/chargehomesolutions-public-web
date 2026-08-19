type IconProps = { className?: string }

const base = "h-[0.9375rem] w-[0.9375rem]"

function Svg({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className ?? base}>
      {children}
    </svg>
  )
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M13.5 21v-7.2h2.5l.4-2.9h-2.9V9.1c0-.8.2-1.4 1.4-1.4h1.5V5.1c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8v2.9h2.5V21h3z" />
    </Svg>
  )
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 4.6c2.4 0 2.7 0 3.6.05.9.04 1.4.2 1.7.33.44.17.75.37 1.08.7.33.33.53.64.7 1.08.13.3.29.8.33 1.7.05.9.05 1.2.05 3.6s0 2.7-.05 3.6c-.04.9-.2 1.4-.33 1.7-.17.44-.37.75-.7 1.08-.33.33-.64.53-1.08.7-.3.13-.8.29-1.7.33-.9.05-1.2.05-3.6.05s-2.7 0-3.6-.05c-.9-.04-1.4-.2-1.7-.33a2.9 2.9 0 0 1-1.08-.7 2.9 2.9 0 0 1-.7-1.08c-.13-.3-.29-.8-.33-1.7C4.6 14.7 4.6 14.4 4.6 12s0-2.7.05-3.6c.04-.9.2-1.4.33-1.7.17-.44.37-.75.7-1.08a2.9 2.9 0 0 1 1.08-.7c.3-.13.8-.29 1.7-.33.9-.05 1.2-.05 3.6-.05zm0 4.1a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6zm0 5.44a2.14 2.14 0 1 1 0-4.28 2.14 2.14 0 0 1 0 4.28zm4.2-5.57a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0z" />
    </Svg>
  )
}

export function XIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M17.2 4h2.6l-5.7 6.5L20.5 20h-5l-3.6-4.9L7.7 20H5.1l6-6.8L4.8 4h5.1l3.4 4.6L17.2 4zm-.9 14.3h1.4L8.4 5.4H6.9l9.4 12.9z" />
    </Svg>
  )
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M7.2 9.6H4.6V20h2.6V9.6zM5.9 4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2zM20 14.1c0-3-.6-4.8-3.5-4.8-1.4 0-2.3.7-2.7 1.4h-.05V9.6H9.3V20h2.6v-5.2c0-1.4.3-2.6 1.9-2.6s1.6 1.4 1.6 2.7V20H20v-5.9z" />
    </Svg>
  )
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M20.6 8.3a2.3 2.3 0 0 0-1.6-1.6C17.6 6.3 12 6.3 12 6.3s-5.6 0-7 .4A2.3 2.3 0 0 0 3.4 8.3C3 9.7 3 12 3 12s0 2.3.4 3.7a2.3 2.3 0 0 0 1.6 1.6c1.4.4 7 .4 7 .4s5.6 0 7-.4a2.3 2.3 0 0 0 1.6-1.6c.4-1.4.4-3.7.4-3.7s0-2.3-.4-3.7zM10.2 14.7V9.3L14.8 12l-4.6 2.7z" />
    </Svg>
  )
}

export function MediumIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M8.3 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm7.3.3c-1.3 0-2.3 2-2.3 4.3s1 4.3 2.3 4.3 2.3-2 2.3-4.3-1-4.3-2.3-4.3zm4.4.5c-.5 0-.9 1.7-.9 3.8s.4 3.8.9 3.8.9-1.7.9-3.8-.4-3.8-.9-3.8z" />
    </Svg>
  )
}

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/chargehomesolutions", Icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/chargehomesolutions", Icon: InstagramIcon },
  { label: "X", href: "https://x.com/chargehomesol", Icon: XIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/chargehomesolutions", Icon: LinkedinIcon },
  { label: "YouTube", href: "https://www.youtube.com/@chargehomesolutions", Icon: YoutubeIcon },
  { label: "Medium", href: "https://medium.com/@chargehomesolutions", Icon: MediumIcon },
]
