import Header from '@/app/Components/Header'
import SubHeader from '@/app/Components/SubHeader'
import React from 'react'

const FixedHeader = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-50'>
        <Header/>
        <SubHeader/>
    </header>
  )
}

export default FixedHeader