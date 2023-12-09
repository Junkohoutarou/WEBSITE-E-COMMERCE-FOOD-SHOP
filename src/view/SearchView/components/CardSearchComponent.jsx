/* eslint-disable react/prop-types */
import { IoLocationSharp } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { GiMoneyStack } from 'react-icons/gi'
const CardSearchComponent = (props) => {
  const { id, title, picture, price, author, location } = props
  return (
    <NavLink to={`/post/${id}`}>
      <section
        style={{ borderRadius: 8 }}
        className='flex flex-row p-4 space-x-6 bg-gray-100 cart--search cart--item'
      >
        <img
          className='object-cover h-24 rounded-lg aspect-square'
          src={picture}
          alt='Not have image'
          loading='Is loading'
        />
        <div className='flex flex-col justify-around grow'>
          <h3 className='text-base font-normal'>{title}</h3>
          <h4 className='text-xs font-normal text-gray-400'>{author}</h4>
          <div className='flex flex-row items-center justify-between w-full'>
            <div className='flex flex-row space-x-2'>
              <GiMoneyStack color='orange' />
              <h5 className='font-normal'>{price}</h5>
            </div>
            <div className='flex flex-row '>
              <IoLocationSharp color='orange' />
              <h5 className='font-normal'>{location}</h5>
            </div>
          </div>
        </div>
      </section>
    </NavLink>
  )
}
export default CardSearchComponent
