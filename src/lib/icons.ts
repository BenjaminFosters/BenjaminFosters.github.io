// src/data/icons.ts
const iconFiles = import.meta.glob("../assets/icons/*.svg", {
  eager: true,
  import: "default",
  query: "?raw",
}) as Record<string, string>;

export const CustomIcons = Object.fromEntries(
  Object.entries(iconFiles).map(([path, svg]) => [
    path
      .split("/")
      .pop()!
      .replace(/\.svg$/, ""),
    svg,
  ]),
) as Record<string, string>;

export type IconName = keyof typeof CustomIcons;
