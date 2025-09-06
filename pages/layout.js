import Navbar from './Navbar'
import Footer from './Footer'
// import Home from './home'
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {/* <Home/> */}
      <main>{children}</main>
      <Footer />
    </>
  )
}