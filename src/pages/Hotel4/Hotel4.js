import Footer from '../../Compoment/Footer'
import Header from '../../Compoment/Header'
import Navbar from '../Hotel/Navbar'
import Main4 from './Main4'
import BlankLayout from 'src/@core/layouts/BlankLayout'

const Hotel4 = () => {
  return (
    <div className='hotel4'>
      <div className='hoter4_body'>
        <Header />
        <Navbar />
        <Main4 />
        <Footer />
      </div>
    </div>
  )
}
Hotel4.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Hotel4
