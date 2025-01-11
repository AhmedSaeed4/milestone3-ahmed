"use client"
import Image from "next/image"
import search from "../assets/Search.png"
import cart2 from "../assets/Shopping--cart.png"
import user from "../assets/User--avatar.png"
import menu from "../assets/Menu.png"
import Link from "next/link"
import { useAppContext } from "@/context";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



const NavBar2 = () => {
  const { cart , setCart } = useAppContext();
  return (
    <div className=" w-auto flex items-center text-center sm:px-[80px] justify-between text-nowrap px-[24px] py-[25px]   ">

    <h1 className="   leading-[29.52px] font-normal  font-clash text-[24px] "><Link href="/">Avion</Link></h1>  
    <ul className="  h-auto w-auto   gap-[44px] text-[#726E8D] lg:flex hidden  font-satoshi font-normal text-[16px] leading-[21.6px] ">
        <li>Plant pots</li>
        <li>Ceramics</li>
        <li>Tables</li>
        <li>Chairs</li>
        <li>Crockery</li>
        <li>Tableware</li>
        <li>Cutlery</li>
    </ul>
    
    <div className=" flex gap-[16px] ">
      <Image src={search} alt="" className=" sm:w-[16px] sm:h-[16px]    "/>
      <Sheet >
                
                <SheetTrigger > <Image src={cart2} alt="" className=" w-[16px] h-[16px] "/>
                </SheetTrigger>
                <SheetContent className="font-mono">
                    <SheetHeader>
                    <SheetTitle>Your Cart</SheetTitle>
                    <SheetDescription className="flex flex-col  gap-4">
                    {cart.map((item, index) => (
                     <button key={index} className="cart-item flex gap-4">
                       <div className="cart-item flex gap-4"> <Image src={item.image} alt={item.name} className="w-10 h-10" />
                        <div>{item.name}</div>
                        <p>${item.price.toFixed(2)}</p>
                        </div>
                        <div className=" text-red-400" onClick={
                            () => {
                                setCart((prev) => {
                                const updatedCart = prev.filter((_, i) => i !== index);
                                localStorage.setItem("cart", JSON.stringify(updatedCart));
                                return updatedCart;
                                });
                            }
                        } >delete</div>
                    </button>
                     ))}
                     <span className=" font-bold text-[18px]">Total: ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</span>
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
                </Sheet>
      <Image src={user} alt="" className=" w-[16px] h-[16px]    "/>
      <Image src={menu} alt="" className="w-[16px] h-[16px] block lg:hidden"/>
    </div>
    
</div>
)
  
}

export default NavBar2