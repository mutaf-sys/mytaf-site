export const siteConfig = {
  name: "Empirebrass",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://empirebrass.ru").replace(
    /\/$/,
    "",
  ),
  description:
    "Ручное изготовление исторических дверных ручек, петель, шпингалетов и оконной фурнитуры из латуни в Санкт-Петербурге.",
  phone: "+79990646417",
  email: "info@empirebrass.ru",
  city: "Санкт-Петербург",
};
