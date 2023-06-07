import ic_curve from '../../assets/CoreValues/ic_curve.svg'
import ic_chat_bot from '../../assets/CoreValues/ic_chat_bot.svg'
import ic_airport_location from '../../assets/CoreValues/ic_airport_location.svg'
import ic_event from '../../assets/CoreValues/ic_event.svg'

interface valueCard{
  icon: {
    src: string,
    alt: string
  },
  title: string,
  description: string
}

export const valuesCards: valueCard[] = [
  {
    icon: {
      src: ic_curve,
      alt: 'ic_curve'
    },
    title: 'structured-approach',
    description: 'description'
  },
  {
    icon: {
      src: ic_chat_bot,
      alt: 'ic_chat_bot'
    },
    title: 'professional-feedbacks',
    description: 'description'
  },
  {
    icon: {
      src: ic_airport_location,
      alt: 'ic_airport_location'
    },
    title: 'efficiency',
    description: 'description'
  },
  {
    icon: {
      src: ic_event,
      alt: 'ic_event'
    },
    title: 'flexible-schedule',
    description: 'description'
  },
]