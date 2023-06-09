import { socialLink } from '../Footer/index';
import ic_facebook from '../../assets/AboutTeachers/ic_facebook.svg'
import ic_instagram from '../../assets/AboutTeachers/ic_instagram.svg'
import ic_linkedin from '../../assets/AboutTeachers/ic_linkedin.svg'
import ic_twitter from '../../assets/AboutTeachers/ic_twitter.svg'


interface teacherCard {
  img: string,
  name: string,
  career: string,
}

export const allTeacherCards: teacherCard[] = [
  {
    img: "https://s3-alpha-sig.figma.com/img/5514/4ddf/993ec7f935876f11c1bdd88c86e0e00d?Expires=1687132800&Signature=EPYs0CTi55Kqkw8ns2iF1YKbDMQjU2WJ7AGenv2JF23DWLZSVwMtI4n517zcEr7DEo8lyJaNQwogtdpKUkE8MIDh2ILqzKqxezA8vpANsuOQ397g6d~ebL-8j61C08L-gloLFY0bn6SgVaYXwXPJ9FyDE51gySFlNRRfqrMTMzh76vz69EfdBt2h-kuXhtnb8KyR4BTEbQJvBf5nUCJADsKOxB~HVlDtVRNbYj~dskPzToOjwFvjB6ORjCgdC~y6XdpbyBcYLQLLzyusXxrFxTP8~1Jq6aaCbvWivGu6aUvxtIqxjym42LOdypCezCWLvJ50uBQzaiffakywSNWHDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Eleanor Pena",
    career: "founder-and-ceo"
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/f764/bd95/ada4450a03fc4fbd8339157525183818?Expires=1687132800&Signature=OP980lEgXJ4mPZt3RVoAfiJjs3TwYFD-yaqo4vm-F9cSFcTgGoeXeYqIt93gil-EKgOjV6AFnt8wBjV-6wXbxGhZsTfRgPNB2ze7UgF-V~ro1J~UAE2wBgrS8KXvD9thnYUul2g4p6BpBDqooBUFjOvOLY3w5x4aibwpi5IkIYnJwTsOdJC11O~fTVU4006BT1v8alvsgmUc6yjW5R4QL5axsEs5bSvSOAJtXqAQKffqQRGmDPDBbW3habPd1vQq0qw04n3BM-Qxc1FuYUw4f1Ai69tTIRtaVP2Rz~mqVfOG7CCVxL6iHuDK5ApfQfkaqn57bXElOs2c6W5QW6vzpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Eleanor Pena",
    career: "analyst-and-marketing-specialist"
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/5651/6057/0a390ab107281f36a9cb69851b58a7e8?Expires=1687132800&Signature=nabS3XiLsmvSOEeywqduxpYpF6BiRA13czPQkaVWD8Tmay5tdQgrppAE1OiBfI2GLxqXLZxd07~j8lqHUuisDsajsiqje4O1IbSegtOrz8Jrq-DBOMsrSnKc3uWxuQ154D-PIslZf4H7cXy6Vj0sfDr0GIFoWQazzwg0byvgj8jP2u-KmSofz0ahgmwG5HmRLgib-qrLPGpmYV8ZCqRUZd1ubiP57MypQM-PpsX2wQBEfWTXHdTWD0SDn-ERedZUhl5rrQkom7lLS3cS3hmjHQdHYwxjcg5VUA4LEAvB6RjghxoRBWkH2xTP0K~g-dypFWZFNO4WKjFzPaeEotsLqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Eleanor Pena",
    career: "pm-curator-of-management-course"
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/1620/b008/8ba8e967343a75901a08526a36882f9e?Expires=1685923200&Signature=SA8HNBT1y5e~NzBh-WoNn52x2wiW7kKhplpE1zfnvNYb5S6pxAOxjjgjaGBOyz~ioGW2le9S3kgRaDik5KpWr5RNpUVT5pu6NcTitcTmkm3uHWOf0uGya0B5yLF8XUQOj4Cn77tBVEpobbo04O4TBGsLKS3WW69gbpZWMhTFYCa0I6Oa5yGRIuMOy5jZKJjq0~BSUMgp7uHA2TB4itn7EoLbQdPmEkE3XTgNJJV6WwmT1BxsA0ROxyiwV-7dKxpP3PDY~4t6eF-37-mDtlFhFXyND6rYl~3mX5G5Ybrzlkf8MrxIV8mmCi6PP5W~HSFDWBWdIZHMV7qlta5WK7XjWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Eleanor Pena",
    career: "curator-of-hr-&-Recruiting-course"
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/0943/92f6/82be751e44dba07c5a8800aa1b09634d?Expires=1685923200&Signature=Hj0HhqoSl7AYHSWq9R6yvkYuuCoZO7KHIblDszoqLblNKrrYm0E9LQpjTvdPfjHWrlr-MsFuMAv6HKCfclGxcaxVrtu-JT63iJN1LHmgso-Epn5eMMo0AOKROVo7qs0OoSaDx9cwMMNMKWw6glKdwVW9YNl-uhs2Qj-vDEGy3v6f795z2WNNdhAFeDtEDyiA-HABarckyoY9U8fsKZKCrElNQl1YVPX0JzWjwBfWj-ClYifALvYr197gRDwr~nWgH0ekdXkG674ew~9jD5OO-FL53maCylK-8IXVdMoBWoYCQql4xZGIqojLl4rp1vwkskENSjWixY37QgehtpiLVA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Kathryn Murphy",
    career: "founder-and-program-director"
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/0476/7d11/45f74e8ec555bdc0df72d7a4a20bccb7?Expires=1685923200&Signature=CBiSHm6mOImWyCE9REOgGaTFapTq8oen21VyFFzajp75Fm5XmnKvxrD2QTTaZbs~t5iimPwSVzU5AEiQIPHr47hFcjrCqf3BynMHOC0NPzMtndDMop1R-0ipDrLXP~gLuSfduRqQoOyaWJNgClGaDiT~yuii3gyLzpX3TL1oL53NWuipJk0O2El73awppAZGPgGuB1QwiOYofOUtCx29hi6JL3O6Wii4R7eTgzvRLtB6aIN1PdZTZflMPDHh2b8f2GBfdMRSDL8p3IB6TlZrT6qxLDc-05vbD3ZGBmorYTlgppxyH7ZLNNB-e6laQZUhiSdR6sn3wMpttAWtqge5ZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Dianne Russell",
    career: "marketer-curator-of-marketing-course"
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/6229/6a3f/3ed018dad4b27858dd67bd8974b5b66e?Expires=1685923200&Signature=F2cvM2vJXHthYXZnJZPPztC82cf4jfQqLgckvRXrINPaLcguk24MAhCv9Io4AjA9-P7fuxioJP6ni6jFJhMdDf40IpvNrJSDZhcunl9TkrregBWWzke3~xVQ1N4ZnQfmQr3rtKHZYVUF3yW8wVuz5~~zvhxqI~7fQ~Y7SkKsj9K5OJxF7JxGxbyi8j1emGkpRITFi~CzwDJHyX1wrfIDhm1AJBJxBRmsfzd9tbmR2eGZBkpzOLXjAxP264ly20fH4hJS1BOXJH79ieHDaF3MMi86ZoAJxigRpaSKZD5pFYcTJW~RFYGW3TgnvNZymPZAn2RfDO9ZeIojgYDwsh5tww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Esther Howard",
    career: "marketer-curator-of-marketing-course"
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/6491/1d41/b9add9f38ea3d5b447fb74a47c0999bc?Expires=1687132800&Signature=KDJTAMVqVZ-3puNfHBzSN2XYBg7IQ4kSWww~8DWco0DxlEy2Hlfn6MxbKMFGYJWI6nkZ~5tNd0CHtwTJDZ6~ASKJGpHaQ-8Irddi8VJL5~3ItjbtfpKI9CThfPf~eCrvIPUFo0JCZPh83icjd4WfP5AuQwLHHQSItGbhrTpf7vwtxzvwa1zZ8SZpbKDH9B2TBiupVZlsdB~Todat-nk7qEQHV6tyv~fxzJwL54~x20eXwZ88Etkjt8UGgjl4b~W-YQC5kfOSctdwjdWNXI6XJa0IYJvrfd7gpeRIo~P1sorhDdPMjOzG-0et3cskEs3ujSOiYMPjAbUALMZVpnP33w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name: "Eleanor Pena",
    career: "ux-designer-curator-of-design-course"
  },
]


export const socialLinks: socialLink[] = [
  {
    href: 'https://facebook.com',
    src: ic_facebook,
    alt: 'facebook'
  },
  {
    href: 'https://instagram.com',
    src: ic_instagram,
    alt: 'instagram'
  },
  {
    href: 'https://linkedin.com',
    src: ic_linkedin,
    alt: 'linkedin'
  },
  {
    href: 'https://twitter.com',
    src: ic_twitter,
    alt: 'twitter'
  },
]