import React from 'react'
import BrandAirBnb from '../../assets/Brands/brand_airbnb.svg'
import BrandHeroku from '../../assets/Brands/brand_heroku.svg'
import BrandNetflix from '../../assets/Brands/brand_netflix.svg'
import BrandSlack from '../../assets/Brands/brand_slack.svg'
import BrandSpotify from '../../assets/Brands/brand_spotify.svg'
import BrandVimeo from '../../assets/Brands/brand_vimeo.svg'
import css from './Brands.module.scss'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../hooks/hooks'

interface BrandsDataProps {
    img: any;
}

const BrandsData: BrandsDataProps[] = [
    {
        img: BrandAirBnb 
    },
    {
        img: BrandHeroku 
    },
    {
        img: BrandNetflix 
    },
    {
        img: BrandSlack 
    },
    {
        img: BrandSpotify 
    },
    {
        img: BrandVimeo 
    }
]

// export const BrandsCard = ({img}: BrandsDataProps) => {
//     <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
//     {/* <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} /> */}
//     <div>
//         <h2>We Work With</h2>
//         <p>Quisque aliquet, libero consequat elementum convallis.</p>
//     </div>
//     <div>{img}</div>
// </div>
// }




function Brands() {
    const darkScheme = useAppSelector(state => state.general.darkScheme)
    const {t} = useTranslation()

  return (
    <article className={`${css['Brands']} ${ darkScheme ? css['Brands-dark'] : ''}`}>
        <div className={`container ${css['Brands__container']}`}>
            <h1>{t('Brands.Work')}</h1>
            <p>{t('Brands.Desk')}</p>
            <div className={css['Brands__images-container']}>
                {
                    BrandsData.map(elem => (
                        <img src={elem.img} alt={elem.img} />
                    ))
                }
            </div>
        </div>
    </article>

    
  )
}

export default Brands