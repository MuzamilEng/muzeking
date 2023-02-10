import React from 'react'
import Header1 from '../../Compoment/Header1'
import Navbar1 from '../../Compoment/Navbar1'
import Main3 from './Main3'
import Footer from '../../Compoment/Footer'
import BlankLayout from 'src/@core/layouts/BlankLayout'

const Hotel3 = () => {
  return (
    <div className='hotel3'>
      <Header1 />
      <Navbar1 />
      <Main3 />
      <Footer />
    </div>
  )
}
Hotel3.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Hotel3
