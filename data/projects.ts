export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  images: string[];
  description: string;
  material: string;
  finish: string;
};

// Порядок в массиве определяет порядок показа: первые 4 попадают
// в блок "Избранные работы" на главной (см. ProjectsComponent.tsx).
export const projects: Project[] = [
  {
    slug: "project-1",
    title: "Партия оконных ручек",
    subtitle: "Латунь · Серийное изготовление",
    category: "Оконная фурнитура",
    image: "/images/project-1.jpg",
    images: ["/images/project-1.jpg"],
    description:
      "Партия исторических оконных ручек, изготовленных вручную из латуни для одного объекта. Форма и пропорции восстановлены по архивному образцу.",
    material: "Латунь",
    finish: "Полировка до зеркального блеска",
  },
  {
    slug: "project-8",
    title: "Индивидуальный проект",
    subtitle: "Изготовление по чертежу",
    category: "Индивидуальные проекты",
    image: "/images/project-8.jpg",
    images: ["/images/project-8.jpg"],
    description:
      "Индивидуальный проект, разработанный по чертежу заказчика с предварительным созданием трёхмерной модели.",
    material: "Латунь",
    finish: "Патинирование",
  },
  {
    slug: "project-7",
    title: "Комплект дверной фурнитуры",
    subtitle: "Латунь · Патинирование",
    category: "Дверная фурнитура",
    image: "/images/project-7.jpg",
    images: ["/images/project-7.jpg"],
    description:
      "Комплект дверной фурнитуры, включающий ручку и шпингалеты в едином историческом стиле.",
    material: "Латунь",
    finish: "Патинирование",
  },
  {
    slug: "project-3",
    title: "Латунная дверная петля",
    subtitle: "Ручное изготовление",
    category: "Петли",
    image: "/images/project-3.jpg",
    images: ["/images/project-3.jpg"],
    description:
      "Массивная дверная петля и шпингалет для исторического интерьера. Каждый элемент изготовлен и обработан вручную.",
    material: "Латунь",
    finish: "Полировка до зеркального блеска",
  },
  {
    slug: "project-4",
    title: "Оконная фурнитура",
    subtitle: "Индивидуальное изготовление",
    category: "Оконная фурнитура",
    image: "/images/project-4.jpg",
    images: ["/images/project-4.jpg"],
    description:
      "Комплект оконной фурнитуры, созданный по индивидуальным размерам и чертежам для конкретного объекта.",
    material: "Латунь",
    finish: "Полировка",
  },
  {
    slug: "project-6",
    title: "Мебельная латунная ручка",
    subtitle: "Ручная обработка",
    category: "Мебельная фурнитура",
    image: "/images/project-6.jpg",
    images: ["/images/project-6.jpg"],
    description:
      "Мебельная ручка с выразительной пластикой, выполненная вручную для частного интерьерного проекта.",
    material: "Латунь",
    finish: "Ручная полировка",
  },
  {
    slug: "project-5",
    title: "Ручка для исторической двери",
    subtitle: "Реконструкция по образцу",
    category: "Дверные ручки",
    image: "/images/project-5.jpg",
    images: ["/images/project-5.jpg"],
    description:
      "Реконструкция дверной ручки по сохранившемуся образцу с точным повторением формы и декоративных элементов.",
    material: "Латунь",
    finish: "Старинная патина",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
