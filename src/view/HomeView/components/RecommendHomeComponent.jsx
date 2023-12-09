/* eslint-disable react/prop-types */
import { FoodCardHomeComponent } from './FoodCardHomeComponent'
import { useTranslation } from 'react-i18next'

export const RecommendToDayItemHomeComponent = (props) => {
  const { url, name } = props
  return (
    <div className='flex flex-col justify-center items-center space-y-4 object-contain home--content-hidden-right cart--recommend-mind'>
      <img
        className='rounded-full h-32 w-32 '
        src={`${url}`}
        alt=''
      />
      <p className='text-xl font-normal text-gray-600'>{name}</p>
    </div>
  )
}
export const RecommendHomeComponent = () => {
  const { t } = useTranslation()
  return (
    <article className='container mx-auto flex flex-col space-y-28'>
      <section className='flex flex-col space-y-14'>
        <h2 className='font-medium home--content-hidden-right'>{t('HOME_VIEW.WHAT_ON_MIND')}</h2>
        <div className='inline-flex flex-row px-12 w-full justify-between items-center flex-wrap'>
          <RecommendToDayItemHomeComponent
            url='https://www.biggerbolderbaking.com/wp-content/uploads/2021/02/New-York-Style-Pizza-Thumbnail1-scaled.jpg'
            name={t('HOME_VIEW.PIZZA')}
          />
          <RecommendToDayItemHomeComponent
            url='https://www.shutterstock.com/image-photo/bugger-on-wooden-table-black-600nw-2049015059.jpg'
            name={t('HOME_VIEW.BUGGER')}
          />
          <RecommendToDayItemHomeComponent
            url='https://shahzadidevje.com/wp-content/uploads/2021/08/Veg-Noodles-Recipe-7.jpg'
            name={t('HOME_VIEW.NOODLES')}
          />
          <RecommendToDayItemHomeComponent
            url='https://www.southernliving.com/thmb/UW4kKKL-_M3WgP7pkL6Pb6lwcgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ham_Sandwich_011-1-49227336bc074513aaf8fdbde440eafe.jpg'
            name={t('HOME_VIEW.SANDWICH')}
          />
          <RecommendToDayItemHomeComponent
            url='https://khinskitchen.com/wp-content/uploads/2023/02/plain-chow-mein-02.jpg'
            name={t('HOME_VIEW.CHOWEIN')}
          />
          <RecommendToDayItemHomeComponent
            url='https://hips.hearstapps.com/del.h-cdn.co/assets/18/08/2048x1152/hd-aspect-1519155106-flank-steak-horizontal.jpg'
            name={t('HOME_VIEW.STEAK')}
          />
        </div>
      </section>
      <section className='flex flex-col space-y-14'>
        <h2 className='font-medium'>{t('HOME_VIEW.PERSONALIZED_RECOMMENDATIONS')}</h2>
        <div className='recommended--food grid gap-24'>
          <FoodCardHomeComponent />
          <FoodCardHomeComponent />
          <FoodCardHomeComponent />
          <FoodCardHomeComponent />
        </div>
      </section>
    </article>
  )
}
