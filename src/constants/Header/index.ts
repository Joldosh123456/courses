
interface navLink {
  to: string,
  text: string,
  onClick?: boolean,
}

export const navLinks: navLink[] = [
  {
    to: '/',
    text: "header.home"
  },
  {
    to: '#',
    text: "header.components",
  },
  {
    to: '#',
    text: "header.pages",
    onClick: true
  },
  {
    to: '#',
    text: "header.documentation"
  },
]



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
    to: '/list',
    text: "header.select.list"
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