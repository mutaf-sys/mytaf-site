export const siteConfig = {
  name: "Empirebrass",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://empire-brass.ru").replace(
    /\/$/,
    "",
  ),
  description:
    "Ручное изготовление исторических дверных ручек, петель, шпингалетов и оконной фурнитуры из латуни в Санкт-Петербурге.",
  phone: "+79990646417",
  email: "info@empirebrass.ru",
  city: "Санкт-Петербург",
  metrikaId: "112836875",
  // Метрика временно отключена: чтобы включить, поставьте true.
  // Вместе с ней сразу появится баннер о cookie и раздел о них в политике.
  metrikaEnabled: false,
};
