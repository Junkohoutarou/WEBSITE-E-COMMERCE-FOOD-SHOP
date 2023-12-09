import { PUBLIC_IMAGE } from '@/utilities'
import { useNavigate } from 'react-router-dom'

export const BrandImageComponent = () => {
  const navigate = useNavigate()
  return (
    <section
      className='flex flex-row space-x-2 items-center mr-2 hover-cursor'
      onClick={() => navigate('/dashboard')}
    >
      <img
        src={PUBLIC_IMAGE.BRAND}
        width={50}
        height={50}
        className='ml-4'
      />
      <h1 className='text-2xl text-white'>BunShop</h1>
    </section>
  )
}
