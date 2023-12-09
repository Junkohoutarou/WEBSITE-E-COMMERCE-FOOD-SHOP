import { useRecoilValue } from 'recoil'
import { authAtom } from '@/view/AuthView/store'
const HeaderDetailProfileManageAccountComponent = () => {
  const auth = useRecoilValue(authAtom)
  return (
    <section className='w-full p-4 flex flex-col space-y-4 bg-white rounded-xl '>
      <p
        style={{ fontFamily: 'monospace' }}
        className='font-bold text-xl pb-2 pr-4 border-b-1 border-solid border-gray-400 w-fit'
      >
        Seller Profile
      </p>
      <div className='flex flex-row space-x-4 px-2 pb-4 border-b-1 border-solid border-gray-200'>
        <div className='h-24 w-24 rounded-full bg-gray-50 border-4 border-solid border-gray-400' />
        <div className='flex flex-col h-full justify-center'>
          <p className='text-xl font-bold'>{auth.data.username}</p>
          <p className='text-xl font-light italic'>Role: {auth.data.role}</p>
          <p className='text font-thin'>{auth.data.province}</p>
        </div>
      </div>
    </section>
  )
}
const ContentDetailProfileManageAccountComponent = () => {
  const auth = useRecoilValue(authAtom)
  return (
    <section className='w-full p-6 flex flex-row space-x-4 '>
      <div className='grow bg-white rounded-xl p-4'>
        <p
          className='font-bold text-xl pr-4 w-fit'
          style={{ fontFamily: 'monospace' }}
        >
          Address
        </p>
        <div className='flex flex-col pl-4'>
          <div className='flex space-x-2 items-center mr-8 border-b-1 profile--banking-item'>
            <p className='font-semibold text-base '>Province: </p>
            <p>{auth.data.province}</p>
          </div>
          <div className='flex space-x-2 items-center border-b-1 profile--banking-item'>
            <p className='font-semibold text-base'>District</p>
            <p>{auth.data.district}</p>
          </div>
          <div className='flex space-x-2 items-center border-b-1 profile--banking-item'>
            <p className='font-semibold text-base'>Ward</p>
            <p>{auth.data.ward}</p>
          </div>
        </div>
      </div>

      <div className='grow p-4 flex flex-col rounded-xl bg-white'></div>
    </section>
  )
}
const DetailProfileManageAccountComponent = () => {
  return (
    <article className='profile w-full h-full flex flex-col shadow-xl rounded-xl overflow-hidden '>
      <div className='px-6 pt-6 overflow-hidden'>
        <HeaderDetailProfileManageAccountComponent />
      </div>
      <ContentDetailProfileManageAccountComponent />
    </article>
  )
}
export default DetailProfileManageAccountComponent
