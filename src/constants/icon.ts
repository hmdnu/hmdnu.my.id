export const icon = {
  email: "icon-[dashicons--email-alt]",
  github: "icon-[mdi--github]",
  linkedin: "icon-[mdi--linkedin]",
  instagram: "icon-[mdi--instagram]",
  newTab: "icon-[cuida--open-in-new-tab-outline]",
  download: "icon-[line-md--download]",
  calender: "icon-[uis--calender]",
  typescript: "icon-[akar-icons--typescript-fill]",
  javascript: "icon-[akar-icons--javascript-fill]",
  go: "icon-[file-icons--go]",
  next: "icon-[akar-icons--nextjs-fill]",
  remix: "icon-[lineicons--remix-js]",
  react: "icon-[akar-icons--react-fill]",
  php: "icon-[akar-icons--php-fill]",
  laravel: "icon-[lineicons--laravel]",
  tailwind: "icon-[lineicons--tailwindcss]",
  web: "icon-[streamline-plump--web]",
  edit: "icon-[lucide--edit]",
} as const;

export const iconKeys = Object.keys(icon) as Array<keyof typeof icon>;

export type IconKey = keyof typeof icon;
