import Allproducts from "../components/Allproducts"
import Filters from "../components/filters"
import Footer from "../components/footer"
import Listings3 from "../components/listings3"
import Navbar from "../components/NavBar"


const AllProducts = () => {
  return (
    <div>
        <Navbar />
        <Allproducts/>
        <Filters/>
        <Listings3/>
        <Footer/>
    </div>
  )
}

export default AllProducts