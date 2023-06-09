import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next';

import css from './CoreValues.module.scss'
import { useAppSelector } from '../../hooks/hooks';
import { valuesCards } from '../../constants/CoreValues/index';
import i18n from '../../i18n';

function CoreValues() {
  const darkScheme = useAppSelector(state => state.general.darkScheme)
  const {t} = useTranslation()


  const renderCards = useMemo(() => (
    valuesCards.map((elem, index) => (
      <section key={Date.now()+index} className={`${css['CoreValues_card']} flex flex-col items-center sm:items-start gap-10 text-center sm:text-left`}>
        <img className='w-12' src={elem.icon.src} alt={elem.icon.alt} />

        <div className='flex flex-col gap-4'>
          <h1 className='text-xl font-semibold'>{t('CoreValues.card.'+elem.title)}</h1>
          <p>{t('CoreValues.card.'+elem.description)}</p>
        </div>
      </section>
    ))
  ), [valuesCards, i18n.language])

  return (
    <article className={`${css['CoreValues']} ${css['CoreValues-dark']}`}>
      <div className="container flex flex-col gap-16 sm:gap-28">
        <div className={`${css['CoreValues_heading']} flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left`}>
          <h1 className='text-3xl sm:text-5xl font-bold'>{t('CoreValues.title')}</h1>
          <p className='w-full sm:w-1/2 text-base'>{t('CoreValues.description')}</p>
        </div>

        <div className={`${css['CoreValues_content']} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16`}>
          {renderCards}
        </div>
      </div>
    </article>
  )
}

export default CoreValues
