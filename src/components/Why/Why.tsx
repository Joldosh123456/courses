import React from 'react'
import css from './Why.module.scss'
import Whyimg from '../../assets/Why/Image Ratio.svg'
import { useAppSelector } from '../../hooks/hooks'
import { useTranslation } from 'react-i18next'

function Why() {
    const darkScheme = useAppSelector(state => state.general.darkScheme)
    const {t} = useTranslation()
  return (
    <div className={`${css['Why']} ${css['Why-dark']}`}>
        <div className={`container ${css['Why__container']}`}>
            <h2>{t("Why.Title")}</h2>
            <div className={`${css['Why__desk']} flex items-center justify-between`}>
                <img src={Whyimg} alt="Whyimg" />
                <div className={css['Why__title']}>
                    <h1>{t("Why.DeskTitle")}</h1>
                    <p>{t("Why.DeskExplain")}</p>
                    <div className={`${css['Why__explain']} flex justify-between`}>
                        <div>
                            <p>{t("Why.Explain")}</p>
                        </div>
                        <div>
                            <p>{t("Why.Explain")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Why