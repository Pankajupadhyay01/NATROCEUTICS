import { React, useState } from 'react';

const Navbar = () => {

    // navbar list created 
    const list = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Search",
            link: "/search"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ]

    

    // usestate
    const [sticky, setsticky] = useState();
    const [nav, setnav] = useState(false);

    // functions
    const func = ()=>{
        setnav(!nav)
        if(!nav){
            document.body.style.overflow="hidden"
        }else{
            document.body.style.overflow="auto"
        }
    }

    // sticky function declare
    const color = () => {
        if (window.scrollY >= 80) {
            setsticky(true)
        } else {
            setsticky(false)
        }
    }
    // sticky function call on scroll
    window.addEventListener('scroll', color)

    return (
        <div>
            <nav className={`border-b-2 border-[#1d4130] ${sticky || nav ? "bg-blue" : "bg-white"} w-full fixed z-[1] py-8 md:py-0`}>
                <div className={`mx-[20px] flex justify-between items-center text-[20px] ${sticky || nav ? "text-white" : "text-[#1d4130]"} font-semibold`}>
                    <div className={`uppercase ${sticky || nav ? "text-white" : "text-[#1d4130]"} text-3xl`}>
                    natroceutics
                    </div>

                    <div onClick={func} className="md:hidden uppercase font-thin text-[18px]">
                        <p> {nav?"close":"menu"}</p>
                    </div>

                    <div className="text-[18px] p-[30px_130px] border-r-2 border-[#1d4130] text-[#1d4130] font-thin hidden md:block">
                        Product
                    </div>

                    <div className={`flex list-none absolute bg-[#1d4130] h-[134vh] justify-center w-[100%] ${nav?"left-0":"-left-[100%]"} top-0 flex-col items-center md:static md:h-0 md:w-auto md:flex-row text-[18px] md:text-[#1d4130] text-white font-thin -z-[1]`}>
                        <div className='md:flex border-y-2 border-[white] w-full'>
                             {
                            list.map(pro => (
                                <li key={pro.name} className="mx-[13px] my-[20px]">
                                    <a href={pro.link}>{pro.name}</a>
                                </li>
                            ))
                        }
                        
                        </div>
                        <div className='w-full ml-[23px] md:hidden'>
                            Email:info@natroceutics.com                        
                        </div>
                   

                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;