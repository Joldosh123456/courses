import React, { useMemo } from 'react'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'


import css from "./Teachers.module.scss"

import { teacherCards } from '../../constants/Teachers'
import i18n from '../../i18n'
import { useAppSelector } from '../../hooks/hooks'

function Teachers() {
  const darkScheme = useAppSelector(state => state.general.darkScheme)

  const {t} = useTranslation()

  const renderTeacherCards = useMemo(() => (
    teacherCards.map((elem, index) => (
      <section key={Date.now() + index} className={`flex flex-col justify-between rounded-2xl overflow-hidden ${css["Teachers__card"]}`}>
        <div className={`${css["Teachers__card-title"]} flex flex-col p-6 text-center`}>
          <h1>{elem.name}</h1>
          <p>{t("Teachers.cards." + elem.career)}</p>
        </div>

        <div className={css["Teachers__card-image-wrapper"]}>
          <img src={elem.img} alt={elem.name} />
        </div>
      </section>
    ))
  ), [i18n.language])

  return (
    <article className={`${css['Teachers']} ${darkScheme ? css['Teachers-dark'] : ''}`}>
      <div className={`container flex flex-col gap-16 sm:gap-20`}>
        <div className={`${css['Teachers-title']} text-center sm:text-left`}>
          <h1 className='text-3xl font-bold sm:text-5xl mb-6'>{t('Teachers.title')}</h1>
          <p>{t('Teachers.description')}</p>
        </div>

        <div className={`${css['Teachers__cards-container']} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10`}>
          {renderTeacherCards}
        </div>

        <Button variant='outlined' color='secondary' className='w-fit self-center' size='large'>{t('Teachers.button')}</Button>
      </div>
    </article>
  )
}

export default Teachers