import { authAtom } from '@/view/AuthView/store'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { DropDownUserDetailHeaderComponent } from './DropDownUserDetailHeaderComponent'
import { dropDownUserDetailHeaderAtom } from '../store'
import { FaUserAlt } from 'react-icons/fa'
import React from 'react'

export const UserDetailHeaderComponent = () => {
  const auth = useRecoilValue(authAtom)
  const menuRef = React.useRef(null)
  const setOpenDropDown = useSetRecoilState(dropDownUserDetailHeaderAtom)
  const handelOpenDropDown = () => {
    setOpenDropDown((preState) => ({ ...preState, open: !preState.open }))
  }
  React.useLayoutEffect(() => {
    const handleDropDown = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setOpenDropDown((preState) => ({ ...preState, open: false }))
      }
    }
    window.document.addEventListener('mousedown', handleDropDown)
    return () => window.document.removeEventListener('mousedown', handleDropDown)
  }, [setOpenDropDown])
  return (
    <section
      className='relative'
      ref={menuRef}
    >
      <button
        onClick={handelOpenDropDown}
        className='flex items-center px-3 py-2 rounded-lg border-1 border-solid border-gray-50 px-4'
        style={{ backgroundColor: 'rgb(247,107,28, 0.7)' }}
      >
        <FaUserAlt
          size={20}
          color='white'
          className='mr-1'
        />
        <p className='text-lg text-white font-bold'>{auth.data.username}</p>
      </button>
      <DropDownUserDetailHeaderComponent />
    </section>
  )
}
