interface navLink {
  to: string,
  text: string
}

export const navLinks: navLink[] = [
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