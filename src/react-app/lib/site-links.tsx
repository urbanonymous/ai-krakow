import type { ReactNode } from "react";

export type SiteNavLink = {
  href: string;
  label: string;
};

export type SocialLink = SiteNavLink & {
  icon: ReactNode;
};

export const navLinks: SiteNavLink[] = [
  { href: "/#about", label: "About" },
  { href: "/#blog", label: "Blog" },
  { href: "/#connect", label: "Connect" },
];

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.notion.so/AI-Krakow-1dbbb67738eb8039a827e1ac3e05b5f1?pvs=4",
    label: "Notion",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <path d="M4 8h18"></path>
        <path d="M8 4v4"></path>
      </svg>
    ),
  },
  {
    href: "https://x.com/search?q=%23AIKrakow",
    label: "X",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      </svg>
    ),
  },
  {
    href: "mailto:urbano@ai-krakow.com",
    label: "Email",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
  },
];
