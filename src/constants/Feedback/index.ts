import vector from "../../assets/Feedback/Vector.svg";
 

interface student {
  img: string,
  name: string
}
interface slider {
  title: string,
  img: string,
  description: string,
  students: student[]
  profession: string,
}
  
export const slider: slider[] = [
  {
    title:"feedback.title",
    img: vector,
    description:"Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach. Truly professionals!",
    students: [
      {
        img: 'https://pbs.twimg.com/profile_images/668640818496958464/a48sWxMg_400x400.jpg',
        name: 'Jason Statham'
      },
      {
        img: 'https://pbs.twimg.com/profile_images/3478244961/01ebfc40ecc194a2abc81e82ab877af4_200x200.jpeg',
        name: 'Dwayne Johnson'
      },
      {
        img: 'https://s3-alpha-sig.figma.com/img/b804/50b4/b9513862fb0927a119a8be2627d91e64?Expires=1687132800&Signature=OBCb5ux1qjzM117d7mSjxO2v2Zn5emQZ~~JbXp1KIdOXSrrKmW1s6OZd8BE0DyQNle8ScNoxNCRFZSRt5OtpTdUsXuBtRCoKRQ0x0UDhpZWp1nA1btSxmvvasclz274AfcJrTnkzEutH~Kp9jTDIbqmo4y7PVE0pmZ~qwNAIO8itiNkwDlcP3n1~Ol-6gQHdpVdH6kFrpuiU9nz3S1g7io5sOfMc3bsQTzWQMZwVIEsa2Uj3KrIr9lbA3t2Lq-UiMU9y2DJWy3VXaV7Nu~4r0sVkW~oNjKO1Cni70Z14XW~f6osQ2ikqlf8gi3B78XJO4lcITyUiPkLING5f5aSUbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name: 'Robert Fox'
      },
      {
        img: 'https://pbs.twimg.com/profile_images/694662257586892802/mdc5ELjj_400x400.jpg',
        name: 'Leonardo Dicaprio'
      },
      {
        img: 'https://pbs.twimg.com/profile_images/1589730936161198081/UDs446vn_400x400.jpg',
        name: 'John Cena'
      },
    ],
    profession: "feedback.profession",
  },
  {
    title:"feedback.title",
    img: vector,
    description:"Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach. Truly professionals!",
    students: [
      {
        img: 'https://pbs.twimg.com/profile_images/1589730936161198081/UDs446vn_400x400.jpg',
        name: 'John Cena'
      },
      {
        img: 'https://pbs.twimg.com/profile_images/668640818496958464/a48sWxMg_400x400.jpg',
        name: 'Jason Statham'
      },
      {
        img: 'https://pbs.twimg.com/profile_images/3478244961/01ebfc40ecc194a2abc81e82ab877af4_200x200.jpeg',
        name: 'Dwayne Johnson'
      },
      {
        img: 'https://s3-alpha-sig.figma.com/img/b804/50b4/b9513862fb0927a119a8be2627d91e64?Expires=1687132800&Signature=OBCb5ux1qjzM117d7mSjxO2v2Zn5emQZ~~JbXp1KIdOXSrrKmW1s6OZd8BE0DyQNle8ScNoxNCRFZSRt5OtpTdUsXuBtRCoKRQ0x0UDhpZWp1nA1btSxmvvasclz274AfcJrTnkzEutH~Kp9jTDIbqmo4y7PVE0pmZ~qwNAIO8itiNkwDlcP3n1~Ol-6gQHdpVdH6kFrpuiU9nz3S1g7io5sOfMc3bsQTzWQMZwVIEsa2Uj3KrIr9lbA3t2Lq-UiMU9y2DJWy3VXaV7Nu~4r0sVkW~oNjKO1Cni70Z14XW~f6osQ2ikqlf8gi3B78XJO4lcITyUiPkLING5f5aSUbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name: 'Robert Fox'
      },
      {
        img: 'https://pbs.twimg.com/profile_images/694662257586892802/mdc5ELjj_400x400.jpg',
        name: 'Leonardo Dicaprio'
      },
    ],
    profession: "feedback.profession",
  },
  {
    title:"feedback.title",
    img: vector,
    description:"Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach. Truly professionals!",
    students: [
      {
        img: 'https://pbs.twimg.com/profile_images/694662257586892802/mdc5ELjj_400x400.jpg',
        name: 'Leonardo Dicaprio'
      },
      {
        img: 'https://pbs.twimg.com/profile_images/1589730936161198081/UDs446vn_400x400.jpg',
        name: 'John Cena'
      },
      {
        img: 'https://pbs.twimg.com/profile_images/668640818496958464/a48sWxMg_400x400.jpg',
        name: 'Jason Statham'
      },
      {
        img: 'https://pbs.twimg.com/profile_images/3478244961/01ebfc40ecc194a2abc81e82ab877af4_200x200.jpeg',
        name: 'Dwayne Johnson'
      },
      {
        img: 'https://s3-alpha-sig.figma.com/img/b804/50b4/b9513862fb0927a119a8be2627d91e64?Expires=1687132800&Signature=OBCb5ux1qjzM117d7mSjxO2v2Zn5emQZ~~JbXp1KIdOXSrrKmW1s6OZd8BE0DyQNle8ScNoxNCRFZSRt5OtpTdUsXuBtRCoKRQ0x0UDhpZWp1nA1btSxmvvasclz274AfcJrTnkzEutH~Kp9jTDIbqmo4y7PVE0pmZ~qwNAIO8itiNkwDlcP3n1~Ol-6gQHdpVdH6kFrpuiU9nz3S1g7io5sOfMc3bsQTzWQMZwVIEsa2Uj3KrIr9lbA3t2Lq-UiMU9y2DJWy3VXaV7Nu~4r0sVkW~oNjKO1Cni70Z14XW~f6osQ2ikqlf8gi3B78XJO4lcITyUiPkLING5f5aSUbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name: 'Robert Fox'
      },
    ],
    profession: "feedback.profession",
  },
  {
    title:"feedback.title",
    img: vector,
    description:"Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach. Truly professionals!",
    students: [
      {
        img: 'https://s3-alpha-sig.figma.com/img/b804/50b4/b9513862fb0927a119a8be2627d91e64?Expires=1687132800&Signature=OBCb5ux1qjzM117d7mSjxO2v2Zn5emQZ~~JbXp1KIdOXSrrKmW1s6OZd8BE0DyQNle8ScNoxNCRFZSRt5OtpTdUsXuBtRCoKRQ0x0UDhpZWp1nA1btSxmvvasclz274AfcJrTnkzEutH~Kp9jTDIbqmo4y7PVE0pmZ~qwNAIO8itiNkwDlcP3n1~Ol-6gQHdpVdH6kFrpuiU9nz3S1g7io5sOfMc3bsQTzWQMZwVIEsa2Uj3KrIr9lbA3t2Lq-UiMU9y2DJWy3VXaV7Nu~4r0sVkW~oNjKO1Cni70Z14XW~f6osQ2ikqlf8gi3B78XJO4lcITyUiPkLING5f5aSUbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name: 'Robert Fox'
      },
      {
        img: 'https://pbs.twimg.com/profile_images/694662257586892802/mdc5ELjj_400x400.jpg',
        name: 'Leonardo Dicaprio'
      },
      {
        img: 'https://pbs.twimg.com/profile_images/1589730936161198081/UDs446vn_400x400.jpg',
        name: 'John Cena'
      },
      {
        img: 'https://pbs.twimg.com/profile_images/668640818496958464/a48sWxMg_400x400.jpg',
        name: 'Jason Statham'
      },
      {
        img: 'https://pbs.twimg.com/profile_images/3478244961/01ebfc40ecc194a2abc81e82ab877af4_200x200.jpeg',
        name: 'Dwayne Johnson'
      },
    ],
    profession: "feedback.profession",
  },
  {
    title:"feedback.title",
    img: vector,
    description:"Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach. Truly professionals!",
    students: [
      {
        img: 'https://pbs.twimg.com/profile_images/3478244961/01ebfc40ecc194a2abc81e82ab877af4_200x200.jpeg',
        name: 'Dwayne Johnson'
      },
      {
        img: 'https://s3-alpha-sig.figma.com/img/b804/50b4/b9513862fb0927a119a8be2627d91e64?Expires=1687132800&Signature=OBCb5ux1qjzM117d7mSjxO2v2Zn5emQZ~~JbXp1KIdOXSrrKmW1s6OZd8BE0DyQNle8ScNoxNCRFZSRt5OtpTdUsXuBtRCoKRQ0x0UDhpZWp1nA1btSxmvvasclz274AfcJrTnkzEutH~Kp9jTDIbqmo4y7PVE0pmZ~qwNAIO8itiNkwDlcP3n1~Ol-6gQHdpVdH6kFrpuiU9nz3S1g7io5sOfMc3bsQTzWQMZwVIEsa2Uj3KrIr9lbA3t2Lq-UiMU9y2DJWy3VXaV7Nu~4r0sVkW~oNjKO1Cni70Z14XW~f6osQ2ikqlf8gi3B78XJO4lcITyUiPkLING5f5aSUbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name: 'Robert Fox'
      },
      {
        img: 'https://pbs.twimg.com/profile_images/694662257586892802/mdc5ELjj_400x400.jpg',
        name: 'Leonardo Dicaprio'
      },
      {
        img: 'https://pbs.twimg.com/profile_images/1589730936161198081/UDs446vn_400x400.jpg',
        name: 'John Cena'
      },
      {
        img: 'https://pbs.twimg.com/profile_images/668640818496958464/a48sWxMg_400x400.jpg',
        name: 'Jason Statham'
      },
    ],
    profession: "feedback.profession",
  },
]