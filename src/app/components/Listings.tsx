import Card from "./card"
//import chair from "../assets/chair.png"
//import vase from "../assets/vase.png"
//import vase2 from "../assets/vase2.png"
//import lamp from "../assets/lamp.png"
import Link from "next/link"


const data = [
  {
    id: 1,
    image: "bg-[url('/fixchair.jpeg')]",
    imagetitle:"The Dandy chair",
    price:"£250",
  },
  {
    id: 2,
    image: "bg-[url('/fixvase.jpeg')]",
    imagetitle:"Rustic Vase Set",
    price:"£155",
  },
  {
    id: 3,
    image: "bg-[url('/fixvas2.jpeg')]",
    imagetitle:"The Silky Vase",
    price:"£125",
  },
  {
    id: 4,
    image: "bg-[url('/fixlamp.jpeg')]",
    imagetitle:"The Lucy Lamp",
    price:"£399",
  },
]

const Listings = () => {
  return (
    <div className=" flex flex-col sm:px-[80px]  px-[24px] pt-[20px] pb-[40px] ">
    <div className=" grid grid-cols-2 md:grid-cols-2 text-wrap lg:grid-cols-4  gap-[16px] sm:gap-[20px] ">
      {data.map((elem)=>{
        return( 
          <Card key={elem.id} image={elem.image} imagetitle={elem.imagetitle} price={elem.price} />
        )
      })}
      
      </div>
      <Link href={'allproducts'} id="button-medium" className=" w-auto sm:w-auto h-auto  bg-[#F9F9F9] flex mt-[40px] text-nowrap justify-center items-center self-center max-w-max  sm:mt-12 py-[16px] px-[32px] ">
              <p className="font-satoshi font-normal text-[16px] leading-[24px] ">View collection</p>
      </Link>
    </div>
  )
}

export default Listings