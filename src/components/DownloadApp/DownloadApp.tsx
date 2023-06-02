import React from 'react'
import css from './DownloadApp.module.scss'
import QrCodeImg from '../../assets/DownloadApp/ic_qrcode.svg'
import DownloadImg from '../../assets/DownloadApp/06.svg'
import { useAppSelector } from '../../hooks/hooks'
import { useTranslation } from 'react-i18next'
import { Button } from '@mui/material'
import appStore from '../../assets/DownloadApp/ic_appstore.svg'
import googlePlay from '../../assets/DownloadApp/ic_googleplay.svg'
import { button } from '../../constants/DownloadApp'

const buttons: button[] = [
    {
      img: appStore,
      title: 'Apple Store',
      text: 'DownloadApp.ButtonMui',
    },
    {
      img: googlePlay,
      title: 'Google Play',
      text: 'DownloadApp.ButtonMui'
    }
  ]

function DownloadApp() {
    const darkScheme = useAppSelector(state => state.general.darkScheme)
    const {t} = useTranslation()
    
  return (
    <div className={`${css['downloadApp']} ${ darkScheme ? css['downloadApp-dark'] : ''}`}>
        <div className={`container ${css['downloadApp__container']} flex flex-col lg:flex-row items-center lg:items-start justify-between`}>
            <div className={`${css['downloadApp__desk']}`}>
                <h1>{t("DownloadApp.App")}</h1>
                <p>{t("DownloadApp.DeskApp")}</p>
                <div className={`${css['downloadApp__QrCode']} flex items-center flex-col gap-10`}>
                    <div className={`${css['downloadApp__Scan']} flex items-center px-5`}>
                        <img src={QrCodeImg} alt="QrCode" />
                        <h2>{t("DownloadApp.Scan")}</h2>
                    </div>
                    <hr />
                    <div className={`${css['downloadApp__ButtonsMui']} flex items-center px-5 `}>
                        {
                          buttons.map((elem, index) => (
                            <Button key={Date.now() + index} className={`${css['downloadApp__ButtongooglePlay']} flex items-center gap-2`} variant='contained' color='secondary' size='large'>
                                <img src={elem.img} alt="googlePlay" />
                                <div>
                                    <h2>{t(elem.text)}</h2>
                                    <h1>{elem.title}</h1>
                                </div>
                            </Button>
                          ))
                        }
                    </div>
                </div>
            </div>
            <img src={DownloadImg} alt="DownloadImg" />
        </div>
    </div>
  )
}

export default DownloadApp