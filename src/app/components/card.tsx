"use client"
import  { StaticImageData } from 'next/image'
import Link from 'next/link'

interface propstype  {
    
    image: string | StaticImageData
    imagetitle: string,
    price: string
}

const Card = (props:propstype) => {
    const {image,imagetitle,price}= props
  return (
    <Link href={"products"}>
         <div>
             <div id="product-card" className="   w-auto h-auto flex flex-col  gap-[24px]  ">
            <div id="parent" className="  ">
            <div className={`${image}   md:h-[375px] h-[200px] sm:h-[275px] bg-center  bg-cover block   `}></div>
                
            </div>

            <div id="details" className="  sm:w-auto sm:h-auto  flex flex-col gap-2">
                <h4 className="font-clash font-normal text-[20px] leading-[28px] ">{imagetitle}</h4>
                <p className="font-satoshi font-normal text-[18px] leading-[27px] ">{price}</p>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default Card