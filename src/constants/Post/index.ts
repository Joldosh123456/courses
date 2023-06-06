export interface post {
    id: number,
    title: string,
    description: string,
    user: {
     img: string,
     name: string,
     minRead: string
    },
    date: {
     month: string,
     day: number
    },
    image: string
  }