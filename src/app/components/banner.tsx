import Image from "next/image"
import del from "../assets/logos/Delivery.png"
import x from "../assets/logos/x.png"

const Banner = () => {
  return (
    <div className=" sm:h-[41px] w-auto h-[54px] text-nowrap bg-[#2A254B] flex items-center sm:justify-between justify-center sm:p-0  p-[16px] overflow-hidden ">
      <Image src={x} alt="" className="w-[12px] h-[12px] opacity-0    "/> 
        <div className=" flex items-center justify-center  gap-[8px]">
            <Image src={del} alt="" className="w-[14px] h-[11px] "/> 
            <p className="font-satoshi font-normal sm:text-[14px] text-[10px] leading-[18.9px] text-white ">Free delivery on all orders over £50 with code easter checkout</p>
        </div>
        <Image src={x} alt="" className="sm:w-[12px] sm:h-[12px] w-[10px] h-[10px]   ml-[16px] "/> 
        
    </div>
  )
}

export default Banner