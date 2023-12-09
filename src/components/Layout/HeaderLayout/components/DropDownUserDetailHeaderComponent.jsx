import { useRecoilState, useRecoilValue } from 'recoil'
import { dropDownUserDetailHeaderAtom } from '../store'
import { Auth, authAtom } from '@/view/AuthView/store'
import { ROLE } from '@/utilities'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const DropDownUserDetailHeaderComponent = () => {
  const { t } = useTranslation()
  const auth = useRecoilValue(authAtom)
  const [openDropDown, setOpenDropDown] = useRecoilState(dropDownUserDetailHeaderAtom)
  const navigate = useNavigate()
  const { logOut } = Auth.useLogOut()
  return (
    <section
      hidden={openDropDown.open === false}
      style={{
        top: 54,
        right: 0,
        zIndex: 10000,
      }}
      className='animate-fadeIn absolute z-50 w-40 p-2 rounded border-1 border-solid border-gray-400 bg-white'
    >
      <div className='flex flex-col space-y-4'>
        <button
          onClick={(event) => {
            event.preventDefault()
            setOpenDropDown({ open: false })
            if (auth.data.role === ROLE.SELLER) navigate('/seller')
            if (auth.data.role === ROLE.BUYER) navigate('/buyer')
          }}
          className='menu--btn rounded py-2 px-4 font-semibold bg-white border-b-1 border-solid border-gray-400'
        >
          {t('HEADER_LAYOUT.PROFILE')}
        </button>
        <button
          onClick={(event) => {
            event.preventDefault()
            setOpenDropDown({ open: false })
            navigate('/history')
          }}
          className='menu--btn rounded py-2 px-4 font-semibold bg-white border-b-1 border-solid border-gray-400'
        >
          {t('HEADER_LAYOUT.HISTORY')}
        </button>
        <button
          className='menu--btn rounded py-2 px-4 font-semibold bg-white border-b-1 border-solid border-gray-400'
          onClick={(event) => {
            event.stopPropagation()
            setOpenDropDown({ open: false })
            event.preventDefault()
            logOut()
          }}
        >
          {t('HEADER_LAYOUT.LOG_OUT')}
        </button>
      </div>
    </section>
  )
}
