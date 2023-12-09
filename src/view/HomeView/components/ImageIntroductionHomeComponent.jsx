import React from 'react'
import './style.scss'
import { PUBLIC_IMAGE } from '@/utilities'
export const FirstHeaderImageComponent = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className = '' } = props
  return (
    <div className={className}>
      <img
        src={PUBLIC_IMAGE.IMAGE_HEADER_ONE}
        alt=''
        className='w-full h-full'
        style={{ objectFit: 'contain' }}
      />
    </div>
  )
}
export const SecondHeaderImageComponent = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className = '' } = props
  return (
    <div className={className}>
      <img
        src={PUBLIC_IMAGE.IMAGE_HEADER_TWO}
        alt=''
        className='w-full h-full'
        style={{ objectFit: 'contain' }}
      />
    </div>
  )
}
export const ThirdHeaderImageComponent = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className = '' } = props
  return (
    <div className={className}>
      <img
        src={PUBLIC_IMAGE.IMAGE_HEADER_THREE}
        alt=''
        className='w-full h-full'
        style={{ objectFit: 'contain' }}
      />
    </div>
  )
}
const ImageMap = [
  <FirstHeaderImageComponent
    key={1}
    className='item'
  />,
  <SecondHeaderImageComponent
    key={2}
    className='item'
  />,
  <ThirdHeaderImageComponent
    key={3}
    className='item'
  />,
  <FirstHeaderImageComponent
    key={4}
    className='item'
  />,
  <SecondHeaderImageComponent
    key={5}
    className='item'
  />,
  <ThirdHeaderImageComponent
    key={6}
    className='item'
  />,
]
const BackGroundImage = () => {
  const [data, setData] = React.useState(ImageMap)
  React.useLayoutEffect(() => {
    setInterval(() => {
      setData((preState) => {
        const temp = preState[0]
        preState.shift()
        return [...preState, temp]
      })
    }, 2000)
  }, [])
  return (
    <div>
      {data.map((item) => {
        return item
      })}
    </div>
  )
}
export const ImageIntroductionHomeComponent = () => {
  return (
    <article className='intro--image relative '>
      <BackGroundImage />
    </article>
  )
}
