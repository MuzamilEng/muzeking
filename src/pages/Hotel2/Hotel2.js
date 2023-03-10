import Header from '../../Compoment/Header'
import Navbar from '../Hotel/Navbar'
import Footer from '../../Compoment/Footer'
import Main2 from './Main2'
import BlankLayout from 'src/@core/layouts/BlankLayout'

const Hotel2 = () => {
  return (
    <div className='hotel2'>
      <div className='hotel2_container'>
        <Header />
        <Navbar />
        <Main2 />
        <Footer />
      </div>
    </div>
  )
}
Hotel2.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Hotel2
