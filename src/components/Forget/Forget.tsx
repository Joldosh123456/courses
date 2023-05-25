import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../hooks/hooks'

import css from './Forget.module.scss'

import illustration from '../../assets/Forget/illustration.png'


function Forget() {
  const darkScheme = useAppSelector(state => state.general.darkScheme)

  const {t} = useTranslation()


  const [inputValue, setInputValue] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setInputValue('')
  } 


  return (
    <article className={`${css['Forget']} ${darkScheme ? css['Forget-dark'] : ''}`}>
      <div className={`container ${css['Forget__container']} flex flex-col justify-between gap-16 lg:flex-row lg:gap-0 items-center sm:rounded-3xl`}>
        <div className={`${css['Forget__title']} w-full lg:w-1/2`}>
          <h1 className='font-bold'>{t('Forget.title')}</h1>
          <p>{t('Forget.description')}</p>

          <form className='rounded-lg' onSubmit={e => handleSubmit(e)}>
            <label className='rounded-lg'>
              <input type="email" placeholder={t('Forget.placeholder') || ""} value={inputValue} onChange={e => setInputValue(e.target.value)} required />
              <Button type='submit' variant='contained' color='primary'>{t('Forget.submit')}</Button>
            </label>
          </form>
        </div>

        <div className={`${css['Forget__image']} w-full lg:w-2/5 flex items-center justify-center order-first lg:order-last`}>
          <img src={illustration} alt="illustration.png" />
        </div>
      </div>
    </article>
  )
}

export default Forget