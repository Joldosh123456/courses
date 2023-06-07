import React, { useMemo } from 'react'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'


import css from "./AboutTeachers.module.scss"

import i18n from '../../i18n'
import { useAppSelector } from '../../hooks/hooks'
import { allTeacherCards, socialLinks } from '../../constants/AboutTeachers'

function AboutTeachers() {
  const darkScheme = useAppSelector(state => state.general.darkScheme)

  const {t} = useTranslation()


  const renderSocialLinks = useMemo(() => (
    socialLinks.map((elem, index) => (
      <a key={Date.now()+index} href={elem.href}>
        <img src={elem.src} alt={elem.alt} />
      </a>
    ))
  ), [socialLinks])

  const renderTeacherCards = useMemo(() => (
    allTeacherCards.map((elem, index) => (
      <section key={Date.now() + index} className={`flex flex-col justify-between rounded-2xl overflow-hidden ${css["AboutTeachers__card"]}`}>
        <div className={`${css["AboutTeachers__card-title"]} flex flex-col p-6 gap-2 text-center`}>
          <h1 className='font-semibold'>{elem.name}</h1>
          <p className='text-xs'>{t("AboutTeachers.cards." + elem.career)}</p>
        </div>

        <div className={`${css["AboutTeachers__card-image-wrapper"]} grow relative`}>
          <img src={elem.img} alt={elem.name} />

          <div className={`${css['AboutTeachers__card-overlay']} w-full h-full flex items-end justify-center absolute top-0 left-0`}>
            {renderSocialLinks}
          </div>
        </div>

      </section>
    ))
  ), [i18n.language])

  return (
    <article className={`${css['AboutTeachers']} ${darkScheme ? css['AboutTeachers-dark'] : ''}`}>
      <div className={`container flex flex-col gap-16 sm:gap-20`}>
        <div className={`${css['AboutTeachers-title']} text-center sm:text-left`}>
          <h1 className='text-center text-3xl font-bold sm:text-5xl mb-6'>{t('AboutTeachers.title')}</h1>
        </div>

        <div className={`${css['AboutTeachers__cards-container']} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10`}>
          {renderTeacherCards}
        </div>
      </div>
    </article>
  )
}

export default AboutTeachers