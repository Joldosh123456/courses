import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './Footer.css'

import mainLogoLight from './assets/mainLogo-lightMode.svg'
import mainLogoDark from './assets/mainLogo-darkMode.svg'
import newsletterIcon from './assets/newsletterIcon.svg'
import facebookIcon from './assets/facebookIcon-lightMode.svg'
import instagramIcon from './assets/instagramIcon-lightMode.svg'
import linkedInIcon from './assets/linkedInIcon-lightMode.svg'
import twitterIcon from './assets/twitterIcon-lightMode.svg'
import letterIcon from './assets/letterIcon-lightMode.svg'
import geopositionIcon from './assets/geopositionIcon-lightMode.svg'
import arrowIcon from './assets/arrow-darkMode.svg'
import { useAppSelector } from '../../hooks/hooks'
import { Button } from '@mui/material'


function Footer() {
  const darkScheme = useAppSelector(state => state.general.darkScheme)
  const dispatch = useDispatch()


  const { t } = useTranslation()  



  const [newsletterInputValue, setNewsletterInputValue] = useState('')
  const [emailInputValue, setEmailInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, setState: { (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (arg0: string): void }) => {
    e.preventDefault()

    setState('')
  }

  return (
    <footer className={darkScheme ? 'footer-dark' : ''}>
      <article className='footer__main'>
        <div className='container footer__main-container'>
          <div className='footer__main-content'>
            <section className='footer__title'>
              <img className='footer__title-logo' src={darkScheme ? mainLogoDark : mainLogoLight} alt="ZONE-logo" />

              <p>{t("footer.text")}</p>

              <div className='footer__title-socials'>
                <a href="#"><img src={facebookIcon} alt="facebook-icon" /></a>
                <a href="#"><img src={instagramIcon} alt="instagram-icon" /></a>
                <a href="#"><img src={linkedInIcon} alt="linkedIn-icon" /></a>
                <a href="#"><img src={twitterIcon} alt="twitter-icon" /></a>
              </div>
            </section>

            <section className='footer__contacts'>
              <address><img src={letterIcon} alt="letter-icon" /> info@example.com</address>
              <address><img src={geopositionIcon} alt="geoposition-icon" /> {t("footer.address")}</address>
            </section>

            <section className='footer__form-section'>
              <form onSubmit={e => handleSubmit(e, setEmailInputValue)}>
                <input type="email" placeholder={t("footer.input-placeholder") || ''} value={emailInputValue} onChange={e => setEmailInputValue(e.target.value)} required />
                <Button variant='contained' color='secondary'>
                  <img src={arrowIcon} alt='arrow-icon' />
                </Button>
              </form>
            </section>
          </div>

          <section className='footer__copyright'>
            <p>{t("footer.copyright")}</p>

            <nav>
              <a href="#">{t("footer.help-center")}</a>
              <a href="#">{t("footer.terms-of-service")}</a>
            </nav>
          </section>
        </div>
      </article>
    </footer>
  )
}

export default Footer