interface navSelectLink {
  to: string,
  text: string
}

export const navSelectLinks: navSelectLink[] = [
  {
    to: '/',
    text: "header.home"
  },
  {
    to: '/blog',
    text: "header.select.blog"
  },
  {
    to: '/about',
    text: "header.select.about"
  },
  {
    to: '/contact',
    text: "header.select.contact"
  },
]



interface langSelectButton {
  lang: string
}

export const langSelectButtons: langSelectButton[] = [
  {
    lang: "en"
  },
  {
    lang: "ru"
  }
]