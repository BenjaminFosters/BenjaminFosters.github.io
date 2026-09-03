export interface Social {
  name: string;
  href: string;
  icon: string;
}

export const socials: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/BenjaminFosters",
    icon: "/assets/icons/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/reubenhu",
    icon: "/assets/icons/linkedin.svg",
  },
  {
    name: "Unsplash",
    href: "https://unsplash.com/reuben_hu",
    icon: "/assets/icons/unsplash.svg",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/reuben.hu",
    icon: "/assets/icons/instagram.svg",
  },
  {
    name: "Mastodon",
    href: "https://mastodon.social/@reubenhu",
    icon: "/assets/icons/mastodon.svg",
  },
];
