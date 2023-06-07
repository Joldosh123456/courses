import React from 'react'
import css from './BlogHero.module.scss'
import blogImg from '../../assets/BlogHero/IMG.svg'
import Avatar from '../../assets/BlogHero/Avatar.svg'
import { useAppSelector } from '../../hooks/hooks'
import { useTranslation } from 'react-i18next'

function BlogHero() {
  const darkScheme = useAppSelector(state => state.general.darkScheme)
  const {t} = useTranslation()

  return (
    <article className={`${css['BlogHero']} ${ darkScheme ? css['BlogHero-dark'] : ""}`}>
      <div className={`container ${css['BlogHero__container']} flex items-center gap-20 `}>
        <img src={blogImg} alt="blogImg" />
        <div className={`${css['BlogHero__desk']} flex flex-col `}>
          <h2>{t("BlogHero.Date")}</h2>
          <h1>{t("BlogHero.Maximize")}</h1>
          <p>{t("BlogHero.SomeWord")}</p>
          <div className={`${css['BlogHero__Avatar']} flex items-center gap-2`}>
            <img src={Avatar} alt="Avatar"/>
            <h3>Jane Cooper</h3>
          </div>
        </div>
      </div> 
    </article>
  )
}

export default BlogHero