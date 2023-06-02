import ic_facebook from '../../assets/CourseDetailsLessons/ic_facebook.svg'
import ic_instagram from '../../assets/CourseDetailsLessons/ic_instagram.svg'
import ic_linkedin from '../../assets/CourseDetailsLessons/ic_linkedin.svg'
import ic_twitter from '../../assets/CourseDetailsLessons/ic_twitter.svg'
import ic_file from '../../assets/CourseDetailsLessons/ic_file.svg'
import ic_document_download from '../../assets/CourseDetailsLessons/ic_document_download.svg'
import ic_data_accessor from '../../assets/CourseDetailsLessons/ic_data_accessor.svg'
import ic_devices from '../../assets/CourseDetailsLessons/ic_devices.svg'
import ic_certificate from '../../assets/CourseDetailsLessons/ic_certificate.svg'




interface lesson {
  id: number,
  title: string,
  content: string,
  duration: number,
  isLocked: boolean
}


export const lessonsArr: lesson[] = [
  {
    id: 1,
    title: 'Lesson',
    content: 'Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,',
    duration: 153,
    isLocked: false
  },
  {
    id: 2,
    title: 'Lesson',
    content: 'Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,',
    duration: 153,
    isLocked: false
  },
  {
    id: 3,
    title: 'Lesson',
    content: 'Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,',
    duration: 153,
    isLocked: true
  },
  {
    id: 4,
    title: 'Lesson',
    content: 'Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,',
    duration: 153,
    isLocked: true
  },
  {
    id: 5,
    title: 'Lesson',
    content: 'Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,',
    duration: 153,
    isLocked: true
  },
  {
    id: 6,
    title: 'Lesson',
    content: 'Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,',
    duration: 153,
    isLocked: true
  },
  {
    id: 7,
    title: 'Lesson',
    content: 'Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,',
    duration: 153,
    isLocked: true
  },
  {
    id: 8,
    title: 'Lesson',
    content: 'Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,',
    duration: 153,
    isLocked: true
  },
  {
    id: 9,
    title: 'Lesson',
    content: 'Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,',
    duration: 153,
    isLocked: true
  },
]





interface learning {
  title: string
}

export const learningsArr: learning[] = [
  {
    title: 'A fermentum in morbi pretium aliquam adipiscing donec tempus.'
  },
  {
    title: 'Vulputate placerat amet pulvinar lorem nisl.'
  },
  {
    title: 'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.'
  },
  {
    title: 'Etiam duis lobortis in fames ultrices commodo nibh.'
  },
  {
    title: 'Fusce neque. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.'
  },
  {
    title: 'Curabitur a felis in nunc fringilla tristique. Praesent congue erat at massa.'
  },
]





export const skillsArr: string[] = [
  'Photography',
  'Design',
  'Art',
  'History',
  'Museums',
  'Creativity',
  'Art History'
]





interface socialMedia{
  img: string,
  title: string,
  href: string
}

export const socialsArr: socialMedia[] = [
  {
    img: ic_facebook,
    title: 'facebook',
    href: 'https://facebook.com'
  },
  {
    img: ic_instagram,
    title: 'instagram',
    href: 'https://instagram.com'
  },
  {
    img: ic_linkedin,
    title: 'linkedIn',
    href: 'https://linkedin.com'
  },
  {
    img: ic_twitter,
    title: 'twitter',
    href: 'https://twitter.com'
  },
]





interface instructor{
  name: string,
  img: string,
  prof: string[],
  rating: number,
  ratings: number,
  students: number,
  courses: number
}

export const instructorsArr: instructor[] = [
  {
    name: 'Albert Flores',
    img: 'https://s3-alpha-sig.figma.com/img/b804/50b4/b9513862fb0927a119a8be2627d91e64?Expires=1686528000&Signature=VH5Q21aJQF7o8wB2hTIg3Wp6ns86MdX5b9b0tRfnxeezu5rYqwUc0npKqEoYzVpJbZ65zE48d6A1lkOdDSMh2j9sDNxeNjDDzr-P81pB430I8RIAnHozNzpjl-zuJe8NOjC4qUeZvHyOJsqvj-~NBX3cIwSPLCFbOPZvu42uLF7nN02hMgxSESeEBPqyVq0lsdM7BBZAyoviimp9-UCAKVLkfr1mGJxZKmu4kQ2gWBWPJHNG7hF0S7NoQWDzl5kBOUHPPCCpe0~CmQYP0gnMWyoCskqHZpuzLwB1iHi17oB1YdxqIpGuM~u-EF5TQNT4MT49S2xxBWKaVgnXrBanCA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    prof: ['Designer', 'Illustrator', 'Animator'],
    rating: 4.8,
    ratings: 1083,
    students: 1300,
    courses: 50
  },
  {
    name: 'Arlene McCoy',
    img: 'https://s3-alpha-sig.figma.com/img/d21a/bb67/8fb2cfe23c9046c29e86bcd83fd4cf24?Expires=1686528000&Signature=oeB8hq-wvn1X1iU995sXFugtt3BPtNBEjVhWQVKhpWdd4nifstC7dHtnehOFBFI9PYJKRcir2pRQhhgt~Y0UDvhJS1Vj7slcfTUfHvgy3DWeL~gKAljcf8Qv3vnjzW4mc30Ftnq8dyYxWaVxJm2fJL96bsax9OgAI7fD-UrnhifGuhD0E2s-DY~vB0P9rqIZ7jL0hccSIosF7sNymjFd7UiZ16XGlzbx2K9BJKjYiDP15MSYwsminecgNol-9mhZxs4XUJQSRHQSEIHqkCxozpzlPHNldj-wgo8NA9lfcqkse601Jan-joKa4eulqM~Y94Yz95xxb317x8JtsU0Gcw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    prof: ['Designer', 'Illustrator', 'Animator'],
    rating: 4.8,
    ratings: 1083,
    students: 1300,
    courses: 50
  },
  {
    name: 'Ralph Edwards',
    img: 'https://s3-alpha-sig.figma.com/img/c5f3/5d47/9a5e7db3cd2ec8afb0239cd7ee5c4697?Expires=1686528000&Signature=kluy0fh4YwZihggCiCLt7Qw9Fj8e26ctipXSOYz8kxIbnCHOmqKm1HtAtdXaZONxY3HI~wbDwgF5t-PXlVfvDRhb8-IGkp3MPS5gfvsSque2jcvZxhgtM5CHA~7RcgMeKpcTK0s7T1oIwmX4cFPr~ynpfAYljPztS9yOKjxQWavze5RYrgezfKh83U7K9hQ5ntJN6kb8NK5hjL2D2CRECPpY4yVzilleTsM3mxUMOFEtYp3iR5DHAwxVXuRKmQKbdzC7sulf2jw40XfDkVqQ-9a~iqrSDqS0FrytP~Eg-0Y27xyF1vHW5naSXEop9DQ4HkxLBTt7LzOgPpv8W-vN9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    prof: ['Designer', 'Illustrator', 'Animator'],
    rating: 4,
    ratings: 1083,
    students: 1300,
    courses: 50
  },
  {
    name: 'Cody Fisher',
    img: 'https://s3-alpha-sig.figma.com/img/ceee/746f/2596bdd105d25e0e0e134057a055cad0?Expires=1686528000&Signature=FlfdnMC2tfVA3q5PuaUrfTnD5xs0bT0BnC5UWRN91Xp1jCew8RegRy7e47e7hmEZkkv-Equ5oRnyM-yJVyeCCaFBd3S7HTX6Rm8Bby20o~fmkRLiCeoOhNdUGCE7VN3BkRe-WqJlKLAW9fNKKsBTBXLbwwcLcSnQFha6hTXMfegyztS9cF5HjJPGhFrJDqSP8g5TJ7TY6B2CUWu1dhp1Ag8v7L3vn4ZE8Son8p8Or5VG1Lk49~Kb~hO0U89VcS1ur5MuHVzV-WmpF12er7OhynjkpU7J~7bSveoTLF~mRZhoXqIdm2-9iVAHy-TSHAqBOl~RuRoQAKHNujW4Zvu1nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    prof: ['Designer', 'Illustrator', 'Animator'],
    rating: 4.8,
    ratings: 1083,
    students: 1300,
    courses: 50
  },
]





interface courseIncludes {
  img: string,
  amount?: number,
  title: string
}

export const courseIncludesArr: courseIncludes[] = [
  {
    img: ic_file,
    amount: 20,
    title: 'lessons'
  },
  {
    img: ic_document_download,
    amount: 12,
    title: 'downloadable resources'
  },
  {
    img: ic_data_accessor,
    title: 'Full lifetime access'
  },
  {
    img: ic_devices,
    title: 'Access on desktops, tablets, mobile '
  },
  {
    img: ic_certificate,
    title: 'Certificate of completion'
  }
]