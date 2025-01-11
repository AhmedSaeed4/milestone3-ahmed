import Card from "./card"
//import chair from "../assets/chair.png"
//import vase from "../assets/vase.png"
//import vase2 from "../assets/vase2.png"
//import lamp from "../assets/lamp.png"
import Link from "next/link"
//import new1 from "../assets/new1.png"
//import new2 from "../assets/new2.png"
//import new3 from "../assets/new3.png"
//import new4 from "../assets/new4.png"

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

const data2 = [
  {
    id: 1,
    image: "bg-[url('/rest.jpeg')]",
    imagetitle:"The Dandy chair",
    price:"£250",
  },
  {
    id: 2,
    image: "bg-[url('/rest2.jpeg')]",
    imagetitle:"Rustic Vase Set",
    price:"£155",
  },
  {
    id: 3,
    image: "bg-[url('/rest3.jpeg')]",
    imagetitle:"The Silky Vase",
    price:"£125",
  },
  {
    id: 4,
    image: "bg-[url('/rest4.jpeg')]",
    imagetitle:"The Lucy Lamp",
    price:"£399",
  },
]

const Listings3 = () => {
  return (
    <div className="w-auto flex-col sm:px-[80px] px-[24px] gap-4 pb-2 flex sm:pb-[40px]">
       
    <div id="listing" className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-2 sm:mt-[28px]  gap-[16px] sm:mb-[20px] sm:gap-[20px]">
        {data.map((elem, id)=>{
            return(
                <Card key={id} image={elem.image} imagetitle={elem.imagetitle} price={elem.price}/>
            )
        })}
        
    </div>
    <div id="listing" className="  md:grid-cols-2 lg:grid-cols-4 grid-cols-2 sm:mt-[28px] gap-[16px] sm:mb-[20px] sm:gap-[20px] sm:grid hidden">
        {data2.map((elem, id)=>{
            return(
                <Card key={id} image={elem.image} imagetitle={elem.imagetitle} price={elem.price}/>
            )
        })}
        
    </div>
    
    <div id="listing" className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-2 sm:mt-[28px]  gap-[16px] sm:mb-[20px] sm:gap-[20px]">
        {data.map((elem, id)=>{
            return(
                <Card key={id} image={elem.image} imagetitle={elem.imagetitle} price={elem.price}/>
            )
        })}
        
    </div>
    <Link href={'allproducts'} id="button-medium" className=" w-auto sm:w-auto h-auto  bg-[#F9F9F9] flex mt-[40px] text-nowrap justify-center items-center self-center max-w-max  sm:mt-12 py-[16px] px-[32px] ">
          <p className="font-satoshi font-normal text-[16px] leading-[24px] ">View collection</p>
  </Link>
    
</div>
  )
}

export default Listings3