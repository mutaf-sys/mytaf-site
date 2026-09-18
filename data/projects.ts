export type Category =
  | "Дверные ручки"
  | "Шпингалеты"
  | "Петли"
  | "Оконная фурнитура"
  | "Накладки и декоративные элементы"
  | "Другие изделия";

export type Project = {
  slug: string;
  title: string;
  category: Category;
  /** Студийные фото на чистом фоне — основные изображения карточки. */
  studioImages: string[];
  /** Живые фото того же или очень похожего изделия из архива мастерской. */
  interiorImages?: string[];
  description: string;
  material?: string;
  /** Образец, подходящий для реставрации исторических объектов. */
  historic?: boolean;
};

export const categories: Category[] = [
  "Дверные ручки",
  "Шпингалеты",
  "Петли",
  "Оконная фурнитура",
];

export const projects: Project[] = [
  // Дверные ручки
  {
    slug: "ruchka-balyasina-para",
    title: "Оконная ручка",
    category: "Дверные ручки",
    studioImages: ["/images/catalog/door-handles/ruchka-balyasina-para.jpg"],
    description:
      "Парная дверная ручка на овальной розетке. Точёный стержень классической балясинной формы, полированная латунь.",
  },
  {
    slug: "ruchka-skoba-na-plastine",
    title: "Ручка-скоба на пластине",
    category: "Дверные ручки",
    studioImages: ["/images/catalog/door-handles/ruchka-skoba-na-plastine.jpg"],
    description:
      "Дугообразная скоба-ручка на прямоугольной монтажной пластине, полированная латунь.",
  },
  {
    slug: "ruchka-skoba-dub",
    title: "Ручка-скоба с дубовой рукоятью",
    category: "Дверные ручки",
    studioImages: ["/images/catalog/door-handles/ruchka-skoba-dub.jpg"],
    description:
      "Скоба-ручка с рукоятью из светлого дуба и латунными торцевыми муфтами.",
  },
  {
    slug: "ruchka-skoba-dub-latun-arhiv",
    title: "Ручка-скоба, дуб и латунь",
    category: "Дверные ручки",
    studioImages: [
      "/images/catalog/door-handles/ruchka-skoba-dub-latun-arhiv-1.jpg",
      "/images/catalog/door-handles/ruchka-skoba-dub-latun-arhiv-2.jpg",
      "/images/catalog/door-handles/ruchka-skoba-dub-latun-arhiv-3.jpg",
      "/images/catalog/door-handles/ruchka-skoba-dub-latun-arhiv-4.jpg",
    ],
    description:
      "Ручка на прямоугольной пластине с рукоятью из дуба. Фото из архива выполненных работ мастерской.",
  },
  {
    slug: "ruchka-knopka-riflenaya",
    title: "Оконная лодочка",
    category: "Дверные ручки",
    studioImages: ["/images/catalog/door-handles/ruchka-knopka-riflenaya.jpg"],
    description:
      "Круглая ручка-кнопка с рифлёной поверхностью на овальной розетке. Фото из архива мастерской.",
  },

  // Петли
  {
    slug: "petlya-sharovidnye-nakonechniki",
    title: "Петля универсальная оконная 100мм",
    category: "Петли",
    studioImages: ["/images/catalog/hinges/petlya-sharovidnye-nakonechniki.jpg"],
    description:
      "Накладная петля на двух пластинах с шаровидными наконечниками шарнира, сатинированная латунь.",
  },
  {
    slug: "petlya-konicheskie-nakonechniki",
    title: "Петля разъёмная оконная 150мм",
    category: "Петли",
    studioImages: ["/images/catalog/hinges/petlya-konicheskie-nakonechniki.jpg"],
    description:
      "Петля с коническими наконечниками шарнира, раскрывается на широкий угол.",
  },
  {
    slug: "petlya-usilennaya-stal",
    title: "Петля флажковая, дверная 180мм",
    category: "Петли",
    studioImages: ["/images/catalog/hinges/petlya-usilennaya-stal.jpg"],
    description:
      "Массивная усиленная петля с крупными шаровидными наконечниками для тяжёлых дверей.",
    material: "сталь",
  },
  {
    slug: "petlya-pryamougolnaya",
    title: "Петля разъёмная, дверная 300мм",
    category: "Петли",
    studioImages: ["/images/catalog/hinges/petlya-pryamougolnaya.jpg"],
    description:
      "Прямоугольная накладная петля без декоративных наконечников, полированная латунь.",
  },
  {
    slug: "ruchka-skoba-dugoobraznaya",
    title: "Ручка-скоба дугообразная",
    category: "Дверные ручки",
    studioImages: ["/images/catalog/hinges/petlya-p-obraznaya.jpg"],
    description:
      "Дугообразная ручка-скоба на прямоугольной пластине, полированная латунь.",
  },
  {
    slug: "petlya-s-patinoy",
    title: "Петля с патиной",
    category: "Петли",
    studioImages: ["/images/catalog/hinges/petlya-s-patinoy.jpg"],
    description:
      "Петля с естественной патиной металла — образец для реставрационных объектов.",
    historic: true,
  },
  {
    slug: "petlya-akorn-para-arhiv",
    title: "Петля универсальная дверная 180мм",
    category: "Петли",
    studioImages: ["/images/catalog/hinges/petlya-akorn-para-arhiv.jpg"],
    description:
      "Парная петля с наконечниками в форме желудя. Фото из архива выполненных работ.",
  },
  {
    slug: "petlya-razemnaya-uglovaya-100",
    title: "Петля разъёмная, угловая, цельнолатунная 100мм",
    category: "Петли",
    studioImages: ["/images/catalog/hinges/petlya-razemnaya-uglovaya-100.jpg"],
    description:
      "Угловая разъёмная петля, цельнолатунная, длина 100мм.",
  },

  // Шпингалеты
  {
    slug: "zadvizhka-kovanyj-zavitok",
    title: "Комплект петли и шпингалета на окно",
    category: "Шпингалеты",
    studioImages: ["/images/catalog/bolts/zadvizhka-kovanyj-zavitok.jpg"],
    description:
      "Прямая задвижка с фигурным кованым завитком на монтажной пластине.",
  },
  {
    slug: "zadvizhki-parnye",
    title: "Задвижки парные",
    category: "Шпингалеты",
    studioImages: ["/images/catalog/bolts/zadvizhki-parnye.jpg"],
    description:
      "Пара задвижек разной длины с Т-образной поворотной кнопкой.",
    material: "сталь, никелированная отделка",
  },
  {
    slug: "zadvizhka-reznaya-detali",
    title: "Задвижка резная (детали)",
    category: "Шпингалеты",
    studioImages: ["/images/catalog/bolts/zadvizhka-reznaya-detali.jpg"],
    description:
      "Детали задвижки с прорезным растительным декором корпуса до сборки.",
  },
  {
    slug: "zadvizhka-sharovidnaya-ruchka",
    title: "Задвижка с шаровидной ручкой",
    category: "Шпингалеты",
    studioImages: ["/images/catalog/bolts/zadvizhka-sharovidnaya-ruchka.jpg"],
    description:
      "Задвижка со сферической кнопкой-ручкой и отдельной приёмной планкой.",
  },
  {
    slug: "zadvizhka-gribovidnaya-ruchka",
    title: "Задвижка с грибовидной ручкой",
    category: "Шпингалеты",
    studioImages: ["/images/catalog/bolts/zadvizhka-gribovidnaya-ruchka.jpg"],
    description:
      "Задвижка с гладкой грибовидной кнопкой-ручкой и встроенным приёмным механизмом.",
  },
  {
    slug: "zadvizhka-reznaya-v-sbore",
    title: "Задвижка резная, в сборе",
    category: "Шпингалеты",
    studioImages: ["/images/catalog/bolts/zadvizhka-reznaya-v-sbore.jpg"],
    description:
      "Задвижка с прорезным растительным декором корпуса в собранном виде, с приёмной пластиной.",
  },
  {
    slug: "zadvizhka-malaya-patina",
    title: "Задвижка малая с патиной",
    category: "Шпингалеты",
    studioImages: ["/images/catalog/bolts/zadvizhka-malaya-patina.jpg"],
    description:
      "Небольшая коробчатая задвижка с грибовидной кнопкой, лёгкая матовая патина.",
    historic: true,
  },
  {
    slug: "zadvizhka-rychazhnaya",
    title: "Задвижка рычажная",
    category: "Шпингалеты",
    studioImages: ["/images/catalog/bolts/zadvizhka-rychazhnaya.jpg"],
    description:
      "Задвижка с фигурной точёной рычажной ручкой на длинной планке.",
  },
  {
    slug: "zadvizhka-arhiv",
    title: "Задвижка с квадратным штоком",
    category: "Шпингалеты",
    studioImages: ["/images/catalog/bolts/zadvizhka-arhiv.jpg"],
    description:
      "Задвижка с округлой кнопкой-ручкой и приёмной планкой. Фото из архива мастерской.",
  },

  // Оконная фурнитура
  {
    slug: "nabor-okonnyj",
    title: "Оконный комплект: скоба и шпингалеты",
    category: "Оконная фурнитура",
    studioImages: ["/images/catalog/window-fittings/nabor-okonnyj.jpg"],
    description:
      "Комплект из скобы-ручки и пары рифлёных шпингалетов с поворотной кнопкой, тонированная латунь.",
  },
  {
    slug: "zadvizhka-vertikalnaya-balyasina",
    title: "Шпингалет раздвижной 1500мм с ответными планками",
    category: "Шпингалеты",
    studioImages: [
      "/images/catalog/window-fittings/zadvizhka-vertikalnaya-balyasina.jpg",
    ],
    description: "Вертикальная оконная задвижка с точёной рычажной ручкой.",
  },
  {
    slug: "sterzhen-solntse",
    title: "Шпингалет литой раздвижной 1500мм с ответными планками",
    category: "Шпингалеты",
    studioImages: ["/images/catalog/window-fittings/sterzhen-solntse.jpg"],
    description:
      "Длинный стержень оконной фурнитуры с резной центральной муфтой в виде лучевой розетки.",
  },
  {
    slug: "espanoletka-krestoobraznaya",
    title: "Эспаньолетка с крестообразной ручкой",
    category: "Оконная фурнитура",
    studioImages: [
      "/images/catalog/window-fittings/espanoletka-krestoobraznaya.jpg",
    ],
    description:
      "Длинная штанговая эспаньолетка с поворотной крестообразной ручкой посередине.",
  },
  {
    slug: "espanoletka-kovanaya",
    title: "Шпингалет прижимной 1500мм с ответными планками",
    category: "Шпингалеты",
    studioImages: ["/images/catalog/window-fittings/espanoletka-kovanaya.jpg"],
    description:
      "Штанговая эспаньолетка с декоративной кованой ручкой в виде растительного завитка.",
  },
  {
    slug: "nabor-espanoletok",
    title: "Комплект эспаньолеток",
    category: "Оконная фурнитура",
    studioImages: ["/images/catalog/window-fittings/nabor-espanoletok.jpg"],
    description:
      "Комплект из четырёх рычажных узлов эспаньолетки с приёмными планками, состаренная бронза.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: Category) {
  return projects.filter((project) => project.category === category);
}

export const historicProjects = projects.filter((project) => project.historic);
