import type { Metadata } from "next";

import Header from "@/components/Header";
import ProjectsCatalog from "@/components/ProjectsCatalog";

export const metadata: Metadata = {
  title: "Каталог",
  description:
    "Каталог исторической латунной фурнитуры: дверные ручки, петли, шпингалеты и оконная фурнитура ручной работы. Изготовление по индивидуальному проекту.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <ProjectsCatalog />
    </>
  );
}
