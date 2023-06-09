export interface course {
  id: number,
  category: string,
  title: string,
  description: string,
  rating: number,
  reviews: number,
  students: number,
  user: {
    img: string,
    name: string
  },
  hours: number,
  level: string,
  prevPrice: number,
  currPrice: number,
  bestseller: boolean,
  image: string
}



export interface star {
  active: boolean,
  hover: boolean
}





interface filter{
  title: string,
  data: (string | number)[],
  selected: string | number
}

export const filters: filter[] = [
  {
    title: "duration",
    data: [
      10,
      25,
      50,
      100,
      150,
      200,
    ],
    selected: ''
  },
  {
    title: "category",
    data: [
      'management',
      'design',
      'development',
    ],
    selected: ''
  },
  {
    title: "level",
    data: [
      'Beginner',
      'Intermediate',
      'Advanced',
    ],
    selected: ''
  },
  {
    title: "fee",
    data: [
      10,
      25,
      50,
      100,
      200,
    ],
    selected: ''
  },
  {
    title: "language",
    data: [
      'en',
      'ru',
    ],
    selected: ''
  },
]